import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1/user';

// login user
const login = async (token) => {
  const response = await axios.post(`${API_URL}/login`, token);
  console.log(response);
  if (response.data) {
    localStorage.setItem('token', JSON.stringify(response.data));
  }
  return response.data;
};

// update user profil
// const updateProfile = async (userData) => {
//   try {
//     const token = JSON.parse(localStorage.getItem('token'));
//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };
//     const response = await axios.post(`${API_URL}/profile`, userData, config);
//     console.log(response);
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response.data.message || 'Failed to update profile');
//   }
// };

// const profil = async (firstName, lastName) => {
//   const response = await axios
//     .put(`${API_URL}/profile`, firstName, lastName, token, {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: 'Bearer ' + token,
//       },
//       body: JSON.stringify({
//         firstName: firstName,
//         lastName: lastName,
//       }),
//     })
//     .then((response) => response);
//   if (response.ok === true) {
//     const data = await response.json().then((data) => data.body);
//     return data;
//   } else {
//     return null;
//   }
// };

// logout user
const logout = () => {
  localStorage.removeItem('token');
};

const authService = {
  login,
  logout,
  updateProfile,
};

export default authService;
