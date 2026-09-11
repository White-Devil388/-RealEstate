import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AdminLoginPage from '../pages/AdminLoginPage';

export const ProtectedRoutes = ({ children }) => {
  const { isAuthenticated, isRestoring } = useAuth();
  const location = useLocation();

  if (isRestoring) {
    return null;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace state={{ from: location.pathname }} />;
  }

  return children;
};

export const AdminProtectedRoute = ({ children }) => {
  const { isAuthenticated, isAdmin, isRestoring } = useAuth();

  if (isRestoring) {
    return null;
  }

  if (!isAuthenticated || !isAdmin) {
    return <AdminLoginPage />;
  }

  return children;
};

export default ProtectedRoutes;
