import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1';

export async function userLogin(email, password) {
  try {
    const response = await axios.post(
      `${API_URL}/user/login`,
      { email, password },
      { headers: { 'Content-Type': 'application/json' } }
    );
    if (response.status === 200) {
      return response.data.body.token;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function userProfile() {
  try {
    const response = await axios.post(
      `${API_URL}/user/profile`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${response}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
