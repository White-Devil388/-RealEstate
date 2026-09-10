import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import leadRoutes from './routes/leadRoutes.js';
import authRoutes from './routes/authRoutes.js';
import projectRoutes from './routes/projectRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

connectDB();

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    message: 'TEC Ai API is running',
    database: 'MongoDB connection attempted'
  });
});

app.use('/api/leads', leadRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
