import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import staffRoutes from './routes/staffRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Allowed Origins
const allowedOrigins = [
  'http://localhost:5173',
  'https://staff-app-three.vercel.app',
];

// ✅ Middleware
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
}));
app.use(express.json());

// ✅ MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/staff-management');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

// ✅ Routes
app.use('/api/staff', staffRoutes);

// ✅ Fallback route
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// ✅ Start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
