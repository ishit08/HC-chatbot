import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/hospital_management';
const PORT = process.env.PORT || 5000;

export const config = {
  MONGO_URI,
  PORT
}; 