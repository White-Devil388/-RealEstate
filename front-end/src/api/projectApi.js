import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getProjects = async () => {
  const response = await api.get('/projects');
  return response.data;
};

export const createProjectApi = async (projectData) => {
  const response = await api.post('/projects', projectData);
  return response.data;
};

export const updateProjectApi = async (id, updatedFields) => {
  const response = await api.put(`/projects/${id}`, updatedFields);
  return response.data;
};

export const deleteProjectApi = async (id) => {
  const response = await api.delete(`/projects/${id}`);
  return response.data;
};
