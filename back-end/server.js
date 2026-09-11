import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import connectDB from './config/db.js';
import { ensureAdminAccount } from './services/seedAdmin.js';
import leadRoutes from './routes/leadRoutes.js';
import authRoutes from './routes/authRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import careerRoutes from './routes/careerRoutes.js';
import companyRoutes from './routes/companyRoutes.js';
import mediaRoutes from './routes/mediaRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

connectDB();

mongoose.connection.on('connected', () => {
  ensureAdminAccount().catch((error) => {
    console.warn('Unable to seed admin account:', error.message);
  });
});

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    message: 'TEC Ai API is running',
    database: 'MongoDB Atlas connected'
  });
});

app.use('/api/leads', leadRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/careers', careerRoutes);
app.use('/api/company', companyRoutes);
app.use('/api/media', mediaRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
