import mongoose from 'mongoose';

const connectDB = async () => {
    const uri = process.env.MONGO_URI;

  if (!uri) {
    throw new Error(" MONGO_URI is not defined in .env");
  }

  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (err) {
    console.error(' MongoDB connection error:', err);
    process.exit(1);
  }
};

export default connectDB;
