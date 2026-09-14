import dns from 'dns';
import mongoose from 'mongoose';
import 'dotenv/config';

// Ensure DNS resolution works reliably for MongoDB Atlas SRV URIs across all platforms/ISPs
try {
  dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch (e) {
  // Fallback if environment restricts setting custom DNS servers
}
if (dns.setDefaultResultOrder) {
  dns.setDefaultResultOrder('ipv4first');
}

const connectDB = async ({ retries = 5, delayMs = 5000 } = {}) => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error('MONGO_URI is not configured. Add the MongoDB Atlas connection string to .env.');
  }

  let attempt = 1;

  while (attempt <= retries) {
    try {
      await mongoose.connect(mongoUri, {
        serverSelectionTimeoutMS: 15000,
        autoIndex: true,
        family: 4
      });

      console.log(`MongoDB Connected: ${mongoose.connection.host} (DB: ${mongoose.connection.name})`);
      return mongoose.connection;
    } catch (error) {
      const message = error?.message || 'Unknown MongoDB connection error';
      console.warn(`MongoDB connection attempt ${attempt}/${retries} failed: ${message}`);

      if (attempt === retries) {
        throw new Error(`MongoDB connection failed after ${retries} attempts: ${message}`);
      }

      await new Promise((resolve) => setTimeout(resolve, delayMs));
      attempt += 1;
    }
  }
};

export default connectDB;
