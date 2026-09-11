import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LockKeyhole, Mail, Loader2, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLead } from '../context/LeadContext';

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const { loginAsAdmin, isAuthenticated, isAdmin, user } = useAuth();
  const { showToast } = useLead();
  const [form, setForm] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    setErrorMessage('');

    try {
      const loggedUser = await loginAsAdmin(form);
      if (showToast) showToast(`Welcome, ${loggedUser.name}`, 'success');
      if (loggedUser?.role === 'admin') {
        navigate('/admin', { replace: true });
      }
    } catch (error) {
      const message = error.response?.data?.message || error.message || 'Unable to access the admin panel';
      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg text-ink pb-24" style={{ paddingTop: '8.5rem' }}>
      <div className="container-custom max-w-lg">
        <div className="glass-panel overflow-hidden rounded-3xl border border-accent/35 bg-surface/90 shadow-2xl">
          <div className="border-b border-border bg-muted/60 px-6 py-5">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-accent">
              <ShieldCheck className="h-4 w-4" />
              <span>Restricted access</span>
            </div>
            <h1 className="mt-1 font-heading text-2xl font-bold text-ink">Admin Panel Login</h1>
            <p className="mt-1 text-xs text-ink-secondary">
              Only seeded admin accounts can enter. Website signup always creates a regular user.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 p-6 sm:p-8">
            {isAuthenticated && !isAdmin && (
              <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-xs text-rose-300">
                {user?.email} is a client account and cannot open the admin console.
              </div>
            )}

            {errorMessage && (
              <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-xs text-rose-300">
                {errorMessage}
              </div>
            )}

            <div className="form-group mb-0">
              <label className="form-label" htmlFor="admin-email">Admin Email or Username</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-accent" />
                <input
                  id="admin-email"
                  type="text"
                  className="form-input pl-10"
                  placeholder="admin@gurukripaarcon.com or Gurukripa Admin"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="form-group mb-0">
              <label className="form-label" htmlFor="admin-password">Admin Password</label>
              <div className="relative">
                <LockKeyhole className="absolute left-3 top-3 h-4 w-4 text-accent" />
                <input
                  id="admin-password"
                  type="password"
                  minLength={6}
                  className="form-input pl-10"
                  placeholder="••••••••"
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
              className="btn-gold mt-2 w-full py-3.5 flex items-center justify-center gap-2 font-bold disabled:opacity-60"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Verifying access...</span>
                </>
              ) : (
                <span>Sign in to Admin Console</span>
              )}
            </button>

            <button
              type="button"
              onClick={() => navigate('/')}
              className="w-full text-center text-xs font-semibold text-ink-muted hover:text-accent"
            >
              Back to website
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
