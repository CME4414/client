import axios from 'axios';

axios.defaults.withCredentials = true;

const baseUrl = process.env.REACT_APP_API_URL;
const apiUrl = `${baseUrl}/api`;

const login = data => {
  return axios.get(`${baseUrl}/sanctum/csrf-cookie`).then(() => {
    return axios.post(`${apiUrl}/login`, data);
  });
};

const signup = data => {
  return axios.post(`${apiUrl}/register`, data);
};

const api = {
  login,
  signup,
};

export default api;
