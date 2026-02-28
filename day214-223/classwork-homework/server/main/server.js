const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const PORT = process.env.PORT || 5555
const app = express()
app.use(express.json())
app.use(cors())

app.use(PORT , () => {
    console.log(`Server is running on port ${PORT}`)
})