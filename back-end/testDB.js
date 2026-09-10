import dns from 'dns';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Fix DNS resolution issues on Windows for MongoDB Atlas SRV records
try {
  dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch (e) {
  console.log('Could not set custom DNS servers:', e.message);
}
if (dns.setDefaultResultOrder) {
  dns.setDefaultResultOrder('ipv4first');
}

dotenv.config();

console.log('Connecting to MongoDB URI:', process.env.MONGO_URI);

try {
  await mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 8000
  });
  console.log('SUCCESS: Connected to MongoDB Atlas host:', mongoose.connection.host);
  console.log('Database name:', mongoose.connection.name);
  await mongoose.disconnect();
  console.log('Disconnected cleanly.');
  process.exit(0);
} catch (err) {
  console.error('ERROR connecting to MongoDB Atlas:', err.message);
  process.exit(1);
}
