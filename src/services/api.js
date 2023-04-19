import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

const Login = async (email, password) => {
  try {
    console.log('email: ', email);
    console.log('password: ', password);
    const response = await axios.post(`${API_URL}/v1/user/login`, {
      email,
      password,
    });
    console.log('response: ', response);
    return response.data;
  } catch (error) {
    console.error(error);
    console.log('error message: ', error.message);
    console.log('error response data: ', error.response.data);
  }
};

export default Login;
