import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1';

/**
 * Login user and get token
 *
 * @param {string} email - The email of the user
 * @param {string} password - The password of the user
 * @param {boolean} checkbox - Checkbox value to store user credentials in localStorage
 * @returns {Promise<string|null>} The token or null if login fails
 */
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

/**
 * Get user data using token
 *
 * @param {string} token - The user's token
 * @returns {Promise<Object|null>} The user's data or null if request fails
 */
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

/**
 * Update user profile
 *
 * @param {string} firstName - The new first name for the user
 * @param {string} lastName - The new last name for the user
 * @param {string} token - The user's token
 * @returns {Promise<Object|null>} The updated user profile or null if request fails
 */
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
