import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { UserRound, X } from 'lucide-react';
import Login from './Login';
import Signup from './Signup';

const AuthContainer = ({ isOpen, onClose, onAuthenticated }) => {
  const [mode, setMode] = useState('login');
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const isSignup = mode === 'signup';

  const handleClose = () => {
    setSubmitted(false);
    setErrorMessage('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            className="w-full max-w-md overflow-hidden rounded-3xl border border-accent/35 bg-surface shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border bg-muted px-6 py-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Gurukripa Circle</div>
                <h2 className="mt-1 font-heading text-2xl font-bold text-ink">
                  {isSignup ? 'Create your account' : 'Welcome back'}
                </h2>
              </div>
              <button type="button" onClick={handleClose} className="p-2 text-ink-secondary transition-colors hover:text-accent" aria-label="Close authentication modal">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="mb-6 grid grid-cols-2 border-b border-border">
                {['login', 'signup'].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => { setMode(tab); setSubmitted(false); setErrorMessage(''); }}
                    className={`border-b-2 py-3 text-sm font-bold transition-colors ${mode === tab ? 'border-accent text-accent' : 'border-transparent text-ink-muted hover:text-ink'}`}
                  >
                    {tab === 'login' ? 'Login' : 'Sign Up'}
                  </button>
                ))}
              </div>

              {submitted ? (
                <div className="space-y-4 py-6 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-accent/35 bg-accent/15 text-accent">
                    <UserRound className="h-7 w-7" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-ink">You are all set</h3>
                  <p className="text-sm leading-relaxed text-ink-secondary">Your account details have been saved for this browser.</p>
                  <button type="button" onClick={handleClose} className="btn-gold w-full py-3">Continue browsing</button>
                </div>
              ) : (
                <>
                  {errorMessage && <div className="mb-4 border border-rose-500/40 bg-rose-500/10 px-3 py-2 text-sm text-rose-400">{errorMessage}</div>}
                  {isSignup
                    ? <Signup onError={setErrorMessage} onSuccess={() => { setSubmitted(true); onAuthenticated(); }} />
                    : <Login onError={setErrorMessage} onSuccess={() => { setSubmitted(true); onAuthenticated(); }} />}
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthContainer;
