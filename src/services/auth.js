import API from '../services/api';

const Auth = {
  login: (email, password) => {
    return API.post(`/api/v1/user/login`, { email, password }).then(
      (response) => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
          console.log(response.data);
        }
        return response.data;
      }
    );
  },

  logout: () => {
    localStorage.removeItem('user');
  },

  getCurrentUser: () => {
    if (localStorage.hasOwnProperty('user')) {
      const user = JSON.parse(localStorage.getItem('user'));
      console.log(user);
      return user;
    } else {
      console.log('La clé "user" n\'existe pas dans le stockage local.');
      return null;
    }
  },

  getUserInfo: () => {
    const user = Auth.getCurrentUser();
    if (user) {
      const { firstName, lastName } = user;
      return { firstName, lastName };
    }
    return null;
  },
};

export default Auth;
