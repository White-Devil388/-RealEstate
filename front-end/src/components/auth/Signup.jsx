import React, { useState } from 'react';
import { LockKeyhole, Mail, UserRound, Loader2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useLead } from '../../context/LeadContext';

const Signup = ({ onSuccess, onError, onToggleLogin }) => {
  const { signup } = useAuth();
  const { showToast } = useLead();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    onError('');

    try {
      const newUser = await signup(form);
      if (showToast) showToast(`Account created! Welcome to Gurukripa, ${newUser.name}!`, 'success');
      if (onSuccess) onSuccess(newUser);
    } catch (error) {
      const message = error.response?.data?.message || error.message || 'Unable to create account right now';
      onError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-group mb-0">
        <label className="form-label" htmlFor="signup-name">Full Name</label>
        <div className="relative">
          <UserRound className="absolute left-3 top-3 h-4 w-4 text-accent" />
          <input
            id="signup-name"
            className="form-input pl-10"
            placeholder="John Doe"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            required
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="form-group mb-0">
        <label className="form-label" htmlFor="signup-email">Email Address</label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-accent" />
          <input
            id="signup-email"
            type="email"
            className="form-input pl-10"
            placeholder="name@example.com"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            required
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="form-group mb-0">
        <label className="form-label" htmlFor="signup-password">Password</label>
        <div className="relative">
          <LockKeyhole className="absolute left-3 top-3 h-4 w-4 text-accent" />
          <input
            id="signup-password"
            type="password"
            minLength={6}
            className="form-input pl-10"
            placeholder="Minimum 6 characters"
            value={form.password}
            onChange={(event) => setForm({ ...form, password: event.target.value })}
            required
            disabled={isLoading}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="btn-gold mt-2 w-full py-3.5 flex items-center justify-center gap-2 font-bold transition-all disabled:opacity-60 cursor-pointer"
      >
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Creating account...</span>
          </>
        ) : (
          <span>Create Account</span>
        )}
      </button>

      <div className="pt-2 text-center text-xs text-ink-muted">
        Already have an account?{' '}
        <button
          type="button"
          onClick={onToggleLogin}
          className="font-bold text-accent hover:underline focus:outline-none"
        >
          Log In
        </button>
      </div>
    </form>
  );
};

export default Signup;
