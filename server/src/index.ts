import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { config } from './config/config';
import patientRoutes from './routes/patient';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/patients', patientRoutes);

// MongoDB Connection
mongoose.connect(config.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(config.PORT, () => {
      console.log(`Server is running on port ${config.PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  }); 