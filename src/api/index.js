import axios from 'axios';

axios.defaults.withCredentials = true;
if (window.localStorage.getItem('token')) {
  axios.defaults.headers.common.Authorization = `Bearer ${window.localStorage.getItem('token')}`;
}

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

const users = () => {
  return axios.get(`${apiUrl}/users`);
};

const addChallenge = data => {
  return axios.post(`${apiUrl}/challenge`, data);
};

const getChallenges = () => {
  return axios.get(`${apiUrl}/challenges`);
};

const getChallenge = id => {
  return axios.get(`${apiUrl}/challenge/${id}`);
};

const addInvitee = data => {
  return axios.post(`${apiUrl}/invite`, data);
};

const addProgress = data => {
  return axios.post(`${apiUrl}/progress`, data);
};

const getProgress = id => {
  return axios.get(`${apiUrl}/challenge/${id}/progress`);
};

const api = {
  addChallenge,
  addInvitee,
  addProgress,
  getChallenge,
  getChallenges,
  getProgress,
  login,
  signup,
  users,
};

export default api;
