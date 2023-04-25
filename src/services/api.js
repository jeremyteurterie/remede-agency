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

const authService = {
  login,
};

export default authService;
