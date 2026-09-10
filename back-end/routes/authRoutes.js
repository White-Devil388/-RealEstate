import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import mongoose from 'mongoose';
import { createAuthToken } from '../services/authentication.js';

const router = express.Router();

const publicUser = (user) => ({ id: user._id, name: user.name, email: user.email });

const ensureDbConnection = async () => {
  if (mongoose.connection.readyState === 1) return true;
  if (mongoose.connection.readyState === 2) {
    // Wait up to 3 seconds for connecting state to settle
    for (let i = 0; i < 30; i++) {
      await new Promise((res) => setTimeout(res, 100));
      if (mongoose.connection.readyState === 1) return true;
    }
  }
  return mongoose.connection.readyState === 1;
};

router.post('/signup', async (req, res) => {
  try {
    const isDbConnected = await ensureDbConnection();
    if (!isDbConnected) return res.status(503).json({ message: 'Database connection is connecting or unavailable' });

    const { name, email, password } = req.body || {};
    if (!name?.trim() || !email?.trim() || !password) return res.status(400).json({ message: 'Name, email and password are required' });
    if (password.length < 6) return res.status(400).json({ message: 'Password must be at least 6 characters' });

    const normalizedEmail = email.trim().toLowerCase();
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) return res.status(409).json({ message: 'An account with this email already exists' });

    const passwordHash = await bcrypt.hash(password, 12);
    const user = await User.create({ name: name.trim(), email: normalizedEmail, passwordHash });
    return res.status(201).json({ token: createAuthToken(user), user: publicUser(user) });
  } catch (error) {
    console.error('Signup error:', error.message);
    return res.status(500).json({ message: error.message || 'Unable to create account' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const isDbConnected = await ensureDbConnection();
    if (!isDbConnected) return res.status(503).json({ message: 'Database connection is connecting or unavailable' });

    const { email, password } = req.body || {};
    if (!email?.trim() || !password) return res.status(400).json({ message: 'Email and password are required' });

    const user = await User.findOne({ email: email.trim().toLowerCase() });
    const isValidPassword = user && await bcrypt.compare(password, user.passwordHash);
    if (!isValidPassword) return res.status(401).json({ message: 'Invalid email or password' });

    return res.json({ token: createAuthToken(user), user: publicUser(user) });
  } catch (error) {
    console.error('Login error:', error.message);
    return res.status(500).json({ message: error.message || 'Unable to login' });
  }
});

export default router;
