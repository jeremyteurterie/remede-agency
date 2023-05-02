import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  data: {},
  connected: false,
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
  logout,
} = authSlice.actions;

export default authSlice.reducer;
