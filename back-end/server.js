import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import leadRoutes from './routes/leadRoutes.js';

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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
