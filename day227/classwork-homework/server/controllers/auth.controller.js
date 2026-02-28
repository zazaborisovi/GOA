const User = require('../models/user.model');
const catchAsync = require('../utils/catchAsync');

const createAndSendToken = (user , statusCode , res) => {
  const token = User.signToken(user)
  
  const cookieOptions = {
    httpOnly: true,
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    secure: process.env.NODE_ENV === 'production',
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000)
  }
  
  res.status(statusCode).cookie("jwt", token , cookieOptions).json({message: "success"})
}

const signup = catchAsync(async (req , res , next) =>{
  const { name , password } = req.body
    
  const userExists = await User.findOne({name})
    
  if(userExists){
    return next(new AppError('User already exists' , 400))
  }
  
  const user = await User.create({name , password})
  
  user.password = undefined;
  
  createAndSendToken(user , 201 , res)
})

const signin = catchAsync(async (req , res , next) =>{
  const {name , password} = req.body
    
  const user = await User.findOne({name})
    
  if(!user){
    return next(new AppError('wrong user or password' , 400))
  }
    
  if (!(password == user.password)){
    return next(new AppError('wrong user or password' , 400))
  }
    
  createAndSendToken(user , 200 , res)
})

module.exports = {signup , signin}