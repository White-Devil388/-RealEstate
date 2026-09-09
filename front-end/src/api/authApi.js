import axios from 'axios';

const authApi = axios.create({
  baseURL: '/api/auth',
  headers: { 'Content-Type': 'application/json' }
});

export const loginUser = async (credentials) => {
  const response = await authApi.post('/login', credentials);
  return response.data;
};

export const signupUser = async (details) => {
  const response = await authApi.post('/signup', details);
  return response.data;
};
