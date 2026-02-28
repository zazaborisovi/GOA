const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    minLength: [4, "name must be at least 4 characters"],
    maxLength: [30, "name must be at most 30 characters"],
    unique: true
  },
  password:{
    type: String,
    required: [true, "password is required"],
    minLength: [8, "password must be at least 8 characters"],
    maxLength: [30, "password must be at most 30 characters"]
  }
}, { timestamps: true })

const User = mongoose.model('User', UserSchema);

userSchema.methods.signToken = function() {
  return token = jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  })
}

module.exports = User;