const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true , "email is required"]
  },
  username: {
    type: String,
    required: [true , "username is required"]
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minlength: [8, "password must be at least 8 characters long"]
  },
  role: {
    type: String,
    enum: ['user', 'moderator', 'admin'],
    default: 'user'
  }
})

userSchema.pre("save", async function () {
  if(!this.isModified('password')) return
  return this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.comparePasswords = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password)
}

userSchema.methods.signToken = async function () {
  return jwt.sign({id: this._id} , process.env.JWT_SECRET , {expiresIn: process.env.JWT_EXPIRES_IN})
}

const User = mongoose.model("User", userSchema)
module.exports = User