require("dotenv").config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const authRouter = require('./router/auth.route')
const productRouter = require('./router/product.route')

const app = express()

// middlewares
app.use(express.json())
app.use(cors({ origin: 'http://localhost:5173', credentials: true }))
app.use(cookieParser())

// routes
app.use("/api/auth", authRouter)
app.use("/api/products", productRouter)

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("database connected")
    app.listen(process.env.PORT, () => {
     console.log("backend connected") 
    })
  })