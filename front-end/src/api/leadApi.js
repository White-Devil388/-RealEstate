import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getLeads = async () => {
  const response = await api.get('/leads');
  return response.data;
};

export const createLead = async (leadData) => {
  const response = await api.post('/leads', leadData);
  return response.data;
};

export const updateLeadStatus = async (leadId, status) => {
  const response = await api.patch(`/leads/${leadId}`, { status });
  return response.data;
};
