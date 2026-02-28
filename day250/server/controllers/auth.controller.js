const User = require('../models/user.model')

const createAndSendToken = (statusCode, user, res) => {
  const token = user.signToken()
  const cookieOptions = {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'prod',
    expires
  }
  
  res.cookie(process.env.COOKIE_NAME, token, cookieOptions).status(statusCode).json({user})
}

const signup = async (req, res) => {
  try {
    const { email, username, password } = req.body
    
    const checkEmail = await User.findOne({ email })
    const checkUsername = await User.findOne({ username })
    
    if (checkEmail) return res.status(400).json({ message: 'email already in use' })
    if (checkUsername) return res.status(400).json({ message: 'username already in use' })
    
    const newUser = await User.create({ email, username, password })
    createAndSendToken(201, newUser, res)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err})
  }
}

const signin = async (req, res) => {
  try {
    const { email, password } = req.body
    console.log(email, password)
    
    const user = await User.findOne({ email }).select('+password')
    
    if (!user || !(await user.comparePasswords(password))) return res.status(401).json({ message: "Invalid email or password" })
    
    createAndSendToken(200, user, res)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err })
  }
}

module.exports = { signup, signin }