import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001'; // URL de base de votre API Express
const API = axios.create({
  baseURL: API_BASE_URL,
});

export default API