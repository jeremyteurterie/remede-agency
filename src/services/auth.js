import API from '../services/api';

const AuthService = {
  login: (email, password) => {
    return API.post(`/api/v1/user/login`, { email, password }).then(
      (response) => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      }
    );
  },

  logout: () => {
    localStorage.removeItem('user');
  },

  register: (firstName, lastName, email, password) => {
    return axios.post(`${API_URL}/api/v1/user/signup`, {
      firstName,
      lastName,
      email,
      password,
    });
  },

  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('user'));
  },
};

export default AuthService;
