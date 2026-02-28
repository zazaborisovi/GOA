const User = require('../models/user.model')
const jwt = require('jsonwebtoken')

const protect = async (req, res, next) => {
  try {
    const cookie = req.cookies[process.env.COOKIE_NAME]
    
    if(!cookie) return res.status(401).json({message: 'Unauthorized'})
    
    const decoded = jwt.verify(cookie, process.env.JWT_SECRET)
    
    const user = await User.findById(decoded.id)
    
    if (!user) {
      return res.status(401).json({message: 'Unauthorized'})
    }
    
    req.user = user
    
    next()
  } catch (error) {
    return res.status(401).json({message: 'Unauthorized'})
  }
}

const allowedTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({message: 'Forbidden'})
    }
    
    next()
  }
}

module.exports = {
  protect,
  allowedTo
}