import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mongodb://localhost:27017/mongodb://localhost:27017/MONGODB_URI=mongodb+srv://manasvipansare23:MfvlPFcS78lze9cW%21%40%23@cluster0.rlaak3i.mongodb.net/manasvipansare23?retryWrites=true';

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected');
  } catch (err) {
    console.error('Database connection error:', err);
  }
};

export default connectDB;
