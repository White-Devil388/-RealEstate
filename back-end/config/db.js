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

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error('MONGO_URI is not configured. Add the MongoDB Atlas connection string to .env.');
  }

  try {
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 10000,
      autoIndex: true
    });

    console.log(`MongoDB Connected: ${mongoose.connection.host} (DB: ${mongoose.connection.name})`);
  } catch (error) {
    console.warn('MongoDB connection failed:', error.message);
  }
};

export default connectDB;
