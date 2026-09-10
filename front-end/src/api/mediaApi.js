import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' }
});

export const getMedia = async () => {
  const response = await api.get('/media');
  return response.data;
};

export const createMediaApi = async (mediaData) => {
  const response = await api.post('/media', mediaData);
  return response.data;
};

export const updateMediaApi = async (id, updatedFields) => {
  const response = await api.put(`/media/${id}`, updatedFields);
  return response.data;
};

export const deleteMediaApi = async (id) => {
  const response = await api.delete(`/media/${id}`);
  return response.data;
};
