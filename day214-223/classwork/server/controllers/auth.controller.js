const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

const signInToken = (user) => {
    const token = jwt.sign({ id: user.id , role: user.role }, process.env.JWT_SECRET , {expiresIn: process.env.JWT_EXPIRES_IN});
    return token;
};