import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3001/api/v1';

let initialState = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  data: {},
  error: false,
  connected: false,
};

export const userLogin = async (email, password, checkbox) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  let responses = '';

  try {
    const response = await axios.post(
      API_URL + '/user/login',
      {
        email: email,
        password: password,
      },
      config
    );

    if (response.status === 200) {
      if (checkbox) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
      } else {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
      }
      responses = response.data.body.token;
      localStorage.setItem('token', JSON.stringify(responses));

      return getToken(responses);
    } else {
      responses = null;
    }
  } catch (error) {
    responses = null;
  }

  return responses;
};

export const getToken = async (token) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post(`${API_URL}/user/profile`, {}, config);
    const data = response.data.body;
    return data;
  } catch (error) {
    return null;
  }
};

export const userProfil = async (firstName, lastName, token) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data, status } = await axios.put(
      `${API_URL}/user/profile`,
      { firstName, lastName },
      config
    );

    if (status === 200) {
      return data.body;
    }
    return null;
  } catch (error) {
    return null;
  }
};

const authSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setDataStorage(state, action) {
      localStorage.setItem('data', JSON.stringify(action.payload));
    },
    setDataState(state, action) {
      return {
        ...state,
        data: JSON.parse(action.payload),
      };
    },
    setFirstName(state, action) {
      localStorage.setItem('firstName', JSON.stringify(action.payload));
      return {
        ...state,
        firstName: action.payload,
      };
    },
    setLastName(state, action) {
      localStorage.setItem('lastName', JSON.stringify(action.payload));
      return {
        ...state,
        lastName: action.payload,
      };
    },
    setConnected(state, action) {
      localStorage.setItem('isConnected', action.payload);
      return {
        ...state,
        connected: localStorage.getItem('isConnected'),
      };
    },
    setError(state, action) {
      return {
        ...state,
        error: action.payload,
      };
    },
    removeError(state, action) {
      return {
        ...state,
        error: action.payload,
      };
    },
    logout() {
      localStorage.removeItem('isConnected');
      localStorage.removeItem('data');
      localStorage.removeItem('lastName');
      localStorage.removeItem('firstName');
      localStorage.removeItem('token');
      return initialState;
    },
  },
});

export const {
  setEmail,
  setPassword,
  setDataStorage,
  setDataState,
  setFirstName,
  setLastName,
  setConnected,
  setError,
  removeError,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
