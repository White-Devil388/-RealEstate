import React, { useState } from 'react';
import { LockKeyhole, Mail, UserRound } from 'lucide-react';
import { signupUser } from '../../api/authApi';

const Signup = ({ onSuccess, onError }) => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await signupUser(form);
      localStorage.setItem('teca-token', data.token);
      localStorage.setItem('teca-user', JSON.stringify(data.user));
      onSuccess(data.user);
    } catch (error) {
      onError(error.response?.data?.message || 'Unable to create account right now');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-group mb-0">
        <label className="form-label" htmlFor="signup-name">Full Name</label>
        <div className="relative">
          <UserRound className="absolute left-3 top-3 h-4 w-4 text-accent" />
          <input id="signup-name" className="form-input pl-10" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} required />
        </div>
      </div>

      <div className="form-group mb-0">
        <label className="form-label" htmlFor="signup-email">Email Address</label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-accent" />
          <input id="signup-email" type="email" className="form-input pl-10" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required />
        </div>
      </div>

      <div className="form-group mb-0">
        <label className="form-label" htmlFor="signup-password">Password</label>
        <div className="relative">
          <LockKeyhole className="absolute left-3 top-3 h-4 w-4 text-accent" />
          <input id="signup-password" type="password" minLength={6} className="form-input pl-10" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} required />
        </div>
      </div>

      <button type="submit" className="btn-gold mt-2 w-full py-3.5">Create Account</button>
    </form>
  );
};

export default Signup;
