const { signup, signin } = require('../controllers/auth.controller')
const { protect } = require('../middleware/auth.middleware')

const authRouter = require('express').Router()

authRouter.post("/signup", signup)
authRouter.post("/signin", signin)
authRouter.post("/signout", (req, res) => {
  res.clearCookie(process.env.COOKIE_NAME).status(200).json({ message: "user signed out successfully" })
})
authRouter.post("/auto-signin", protect, (req, res) => {
  res.status(200).json(req.user)
})

module.exports = authRouter