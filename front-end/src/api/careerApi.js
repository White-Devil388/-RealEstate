import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' }
});

export const getCareers = async () => {
  const response = await api.get('/careers');
  return response.data;
};

export const createCareerApi = async (careerData) => {
  const response = await api.post('/careers', careerData);
  return response.data;
};

export const updateCareerApi = async (id, updatedFields) => {
  const response = await api.put(`/careers/${id}`, updatedFields);
  return response.data;
};

export const deleteCareerApi = async (id) => {
  const response = await api.delete(`/careers/${id}`);
  return response.data;
};
