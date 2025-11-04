import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  age: Number,
});

export const User = mongoose.model('User', UserSchema);
