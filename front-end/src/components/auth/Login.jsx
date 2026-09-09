import React, { useState } from 'react';
import { LockKeyhole, Mail } from 'lucide-react';
import { loginUser } from '../../api/authApi';

const Login = ({ onSuccess, onError }) => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await loginUser(form);
      localStorage.setItem('teca-token', data.token);
      localStorage.setItem('teca-user', JSON.stringify(data.user));
      onSuccess(data.user);
    } catch (error) {
      onError(error.response?.data?.message || 'Unable to login right now');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-group mb-0">
        <label className="form-label" htmlFor="login-email">Email Address</label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-accent" />
          <input id="login-email" type="email" className="form-input pl-10" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required />
        </div>
      </div>

      <div className="form-group mb-0">
        <label className="form-label" htmlFor="login-password">Password</label>
        <div className="relative">
          <LockKeyhole className="absolute left-3 top-3 h-4 w-4 text-accent" />
          <input id="login-password" type="password" minLength={6} className="form-input pl-10" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} required />
        </div>
      </div>

      <button type="submit" className="btn-gold mt-2 w-full py-3.5">Login</button>
    </form>
  );
};

export default Login;
