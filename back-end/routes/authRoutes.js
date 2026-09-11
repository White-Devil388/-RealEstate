import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import mongoose from 'mongoose';
import { createAuthToken } from '../services/authentication.js';
import { requireAuth } from '../middleware/authMiddleware.js';
import { validatePublicSignupRequest, validateSeedAdminRequest } from '../services/adminSecurity.js';

const router = express.Router();

const publicUser = (user) => ({
  id: user._id,
  name: user.name,
  email: user.email,
  role: user.role === 'admin' ? 'admin' : 'user'
});

const ensureDbConnection = async () => {
  if (mongoose.connection.readyState === 1) return true;
  if (mongoose.connection.readyState === 2) {
    for (let i = 0; i < 30; i++) {
      await new Promise((res) => setTimeout(res, 100));
      if (mongoose.connection.readyState === 1) return true;
    }
  }
  return mongoose.connection.readyState === 1;
};

const authenticateUser = async (identifier, password) => {
  const normalized = (identifier || '').trim();
  if (!normalized) return null;

  const searchTerm = normalized.toLowerCase();
  const user = await User.findOne({
    $or: [
      { email: searchTerm },
      { name: { $regex: `^${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, $options: 'i' } }
    ]
  });

  const isValidPassword = user && await bcrypt.compare(password, user.passwordHash);
  if (!isValidPassword) return null;
  return user;
};

router.post('/signup', async (req, res) => {
  try {
    const isDbConnected = await ensureDbConnection();
    if (!isDbConnected) return res.status(503).json({ message: 'Database connection is connecting or unavailable' });

    const { name, email, password } = req.body || {};
    if (!name?.trim() || !email?.trim() || !password) return res.status(400).json({ message: 'Name, email and password are required' });
    if (password.length < 6) return res.status(400).json({ message: 'Password must be at least 6 characters' });

    const publicSignupCheck = validatePublicSignupRequest(req.body || {});
    if (!publicSignupCheck.allowed) {
      return res.status(403).json({ message: publicSignupCheck.message });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) return res.status(409).json({ message: 'An account with this email already exists' });

    const passwordHash = await bcrypt.hash(password, 12);
    const user = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      passwordHash,
      role: 'user'
    });
    return res.status(201).json({ token: createAuthToken(user), user: publicUser(user) });
  } catch (error) {
    console.error('Signup error:', error.message);
    return res.status(500).json({ message: error.message || 'Unable to create account' });
  }
});

router.post('/admin/seed', async (req, res) => {
  try {
    const isDbConnected = await ensureDbConnection();
    if (!isDbConnected) return res.status(503).json({ message: 'Database connection is connecting or unavailable' });

    const { name, email, password, adminSeedPassword } = req.body || {};
    if (!process.env.ADMIN_SEED_PASSWORD) {
      return res.status(500).json({ message: 'Admin seed password is not configured on the server' });
    }

    const seedCheck = validateSeedAdminRequest({ adminSeedPassword }, process.env.ADMIN_SEED_PASSWORD);
    if (!seedCheck.allowed) {
      return res.status(403).json({ message: seedCheck.message });
    }

    if (!name?.trim() || !email?.trim() || !password) {
      return res.status(400).json({ message: 'Name, email and password are required for admin seeding' });
    }
    if (password.length < 6) return res.status(400).json({ message: 'Password must be at least 6 characters' });

    const normalizedEmail = email.trim().toLowerCase();
    const existingUser = await User.findOne({ email: normalizedEmail });
    const passwordHash = await bcrypt.hash(password, 12);

    const user = await User.findOneAndUpdate(
      { email: normalizedEmail },
      {
        $set: {
          name: name.trim(),
          email: normalizedEmail,
          passwordHash,
          role: 'admin'
        }
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    if (existingUser && existingUser.email === normalizedEmail && existingUser.role !== 'admin') {
      return res.status(200).json({
        message: 'Admin account updated successfully.',
        user: publicUser(user)
      });
    }

    return res.status(201).json({
      message: 'Admin account seeded successfully.',
      user: publicUser(user)
    });
  } catch (error) {
    console.error('Admin seed error:', error.message);
    return res.status(500).json({ message: error.message || 'Unable to seed admin account' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const isDbConnected = await ensureDbConnection();
    if (!isDbConnected) return res.status(503).json({ message: 'Database connection is connecting or unavailable' });

    const { email, username, password } = req.body || {};
    const identifier = email || username;
    if (!identifier?.trim() || !password) return res.status(400).json({ message: 'Email or username and password are required' });

    const user = await authenticateUser(identifier, password);
    if (!user) return res.status(401).json({ message: 'Invalid email, username or password' });

    return res.json({ token: createAuthToken(user), user: publicUser(user) });
  } catch (error) {
    console.error('Login error:', error.message);
    return res.status(500).json({ message: error.message || 'Unable to login' });
  }
});

router.post('/admin-login', async (req, res) => {
  try {
    const isDbConnected = await ensureDbConnection();
    if (!isDbConnected) return res.status(503).json({ message: 'Database connection is connecting or unavailable' });

    const { email, username, password } = req.body || {};
    const identifier = email || username;
    if (!identifier?.trim() || !password) return res.status(400).json({ message: 'Email or username and password are required' });

    const user = await authenticateUser(identifier, password);
    if (!user) return res.status(401).json({ message: 'Invalid email, username or password' });
    if (user.role !== 'admin') {
      return res.status(403).json({ message: 'This account is not authorized for the admin panel' });
    }

    return res.json({ token: createAuthToken(user), user: publicUser(user) });
  } catch (error) {
    console.error('Admin login error:', error.message);
    return res.status(500).json({ message: error.message || 'Unable to login' });
  }
});

router.get('/me', requireAuth, async (req, res) => {
  return res.json({ user: publicUser(req.user) });
});

export default router;
