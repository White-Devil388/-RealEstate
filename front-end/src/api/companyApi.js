import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' }
});

export const getCompanyInfo = async () => {
  const response = await api.get('/company');
  return response.data;
};

export const updateCompanyInfo = async (updatedFields) => {
  const response = await api.put('/company', updatedFields);
  return response.data;
};
