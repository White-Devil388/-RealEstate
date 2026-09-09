import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem('teca-token');
  const user = localStorage.getItem('teca-user');

  if (!token || !user) {
    return <Navigate to="/" replace state={{ from: location.pathname }} />;
  }

  return children;
};

export default ProtectedRoutes;
