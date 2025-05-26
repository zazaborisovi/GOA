import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import { connectDB } from "./db/connectDB.js"
import router from "./routes/routes.js"

const app = express()
dotenv.config()
const PORT = process.env.PORT || 1234
app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.get("/", (req , res) =>{
    res.status(202).json({message: "server is running"})
})

app.use("/api", router)

app.listen(PORT, () =>{
    connectDB
    console.log(`server is running at localhost:${PORT}`)
})