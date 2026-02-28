const User = require('../models/user.model');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/CatchAsync');

const protect = catchAsync(async (req, res, next) => {
    const token = req.cookies?.jwt
    
    if(!token) return next(new AppError('You are not logged in!', 401));
    
    const decoded = await jwt.verify(token , process.env.JWT_SECRET)
    
    const user = await User.findById(decoded.userId)
    
    if(!user) return next(new AppError('User not found!', 404));
    
    req.user = user
    
    next()
});

module.exports = protect