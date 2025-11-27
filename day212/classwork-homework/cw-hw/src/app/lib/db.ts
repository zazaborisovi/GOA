import mongoose from 'mongoose';

const MongoDBURI = "mongodb+srv://zazaborisovi_db_user:WEwGyX6mREt5fnl4@cluster0.ellok0w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MongoDBURI)
    console.log('MongoDB connected' , conn.connection.host);
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;