import mongoose from 'mongoose';
import { GridFSBucket } from 'mongodb';

let gfs; // Exported GridFS bucket

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('MongoDB connected');

    const db = mongoose.connection.db;
    gfs = new GridFSBucket(db, {
      bucketName: 'uploads'
    });

  } catch (err) {
    console.error('Database connection error:', err);
    process.exit(1);
  }
};

export { connectDB, gfs };