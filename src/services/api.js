import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1';

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
