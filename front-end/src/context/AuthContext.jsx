import React, { createContext, useContext, useState } from 'react';
import { loginUser, signupUser } from '../api/authApi';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem('teca-user');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch {
      return null;
    }
  });

  const [token, setToken] = useState(() => localStorage.getItem('teca-token') || null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'signup'

  const openAuthModal = (mode = 'login') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const login = async (credentials) => {
    const data = await loginUser(credentials);
    if (data && data.token && data.user) {
      localStorage.setItem('teca-token', data.token);
      localStorage.setItem('teca-user', JSON.stringify(data.user));
      setToken(data.token);
      setUser(data.user);
      setIsAuthModalOpen(false);
      return data.user;
    }
    throw new Error('Invalid server response');
  };

  const signup = async (details) => {
    const data = await signupUser(details);
    if (data && data.token && data.user) {
      localStorage.setItem('teca-token', data.token);
      localStorage.setItem('teca-user', JSON.stringify(data.user));
      setToken(data.token);
      setUser(data.user);
      setIsAuthModalOpen(false);
      return data.user;
    }
    throw new Error('Invalid server response');
  };

  const logout = () => {
    localStorage.removeItem('teca-token');
    localStorage.removeItem('teca-user');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: Boolean(user && token),
        isAuthModalOpen,
        authMode,
        setAuthMode,
        openAuthModal,
        closeAuthModal,
        login,
        signup,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
