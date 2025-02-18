import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { connectDB } from "./db/connectDB.js"
import { User } from "./models/user.models.js"

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())
const PORT = process.env.PORT


app.get("/api/users" , async (req , res) =>{
    try {
        const user = await User.find()
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.post("/api/users" , async (req , res) =>{
    const body = req.body
    try {
        const user = new User(req.body)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.listen(PORT , () =>{
    connectDB()
    console.log(`server at http://localhost${PORT}`)
})