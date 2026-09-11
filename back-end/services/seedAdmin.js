import bcrypt from 'bcryptjs';
import User from '../models/User.js';

export const ensureAdminAccount = async () => {
  const email = (process.env.ADMIN_EMAIL || 'admin@gurukripaarcon.com').trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD || 'GurukripaAdmin@2026';
  const name = (process.env.ADMIN_NAME || 'Gurukripa Admin').trim();

  await User.updateMany(
    { $or: [{ role: { $exists: false } }, { role: null }, { role: '' }] },
    { $set: { role: 'user' } }
  );

  const existing = await User.findOne({ email });

  if (!existing) {
    const passwordHash = await bcrypt.hash(password, 12);
    await User.create({ name, email, passwordHash, role: 'admin' });
    console.log(`Admin account created (${email}). Public signup cannot grant admin access.`);
    return;
  }

  if (existing.role !== 'admin') {
    existing.role = 'admin';
    await existing.save();
  }

  if (process.env.ADMIN_PASSWORD) {
    existing.passwordHash = await bcrypt.hash(process.env.ADMIN_PASSWORD, 12);
    existing.role = 'admin';
    await existing.save();
  }

  console.log(`Admin account ready (${email}). Public signup cannot grant admin access.`);
};
