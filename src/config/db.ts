import mongoose from 'mongoose';

const connectDB = async () => {
    const uri = process.env.MONGO_URI;

  if (!uri) {
    throw new Error(" MONGO_URI is not defined in .env");
  }

  try {
    await mongoose.connect(uri);
    console.log('\x1b[32m%s\x1b[0m', 'MongoDB connected.....');
  } catch (err) {
    console.error('\x1b[31m%s\x1b[0m', 'MongoDB connection failed:', err);
    process.exit(1);
  }
};

export default connectDB;
