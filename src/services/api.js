import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1/user';

// login user
const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  console.log(response);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

// update user profil
const profil = async (userData) => {
  const response = await axios.put(`${API_URL}/profile`, userData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
    },
  });
  console.log(response);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

// logout user
const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  login,
  logout,
  profil,
};

export default authService;
