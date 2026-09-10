import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' }
});

export const getBlogs = async () => {
  const response = await api.get('/blogs');
  return response.data;
};

export const createBlogApi = async (blogData) => {
  const response = await api.post('/blogs', blogData);
  return response.data;
};

export const updateBlogApi = async (id, updatedFields) => {
  const response = await api.put(`/blogs/${id}`, updatedFields);
  return response.data;
};

export const deleteBlogApi = async (id) => {
  const response = await api.delete(`/blogs/${id}`);
  return response.data;
};
