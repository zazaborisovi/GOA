import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import { connectDB } from "./db/connectDb.js";

dotenv.config()

const app = express()
app.use(cors())

const USER = {
    name: "userName",
    surname: "userSurname",
    age: 17
}

app.get("/user" , (req,res) =>{
    try {
        res.status(200).json(USER)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.listen(process.env.PORT , () => {
    connectDB
    console.log(`server at http://localhost:${process.env.PORT}`)
})