import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { PostModel } from "./models/postmodels.js"
import { connectDB } from "./db/connectDB.js"

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.post("/create-user", async (req, res) => {
    console.log(req.body)
    try {
        const user = new PostModel({
            ...req.body
        })
        await user.save()

        res.status(201).json({message: "Post send successfully"})
    } catch (err) {
        res.status(500).json({message: "Not send info"})
    }
})

app.delete("/delete-post/:id", async (req, res) => {
    try {
        await PostModel.findByIdAndDelete(req.params.id)
        res.status(204).json({message: "Post deleted successfully"})
    } catch (err) {
        res.status(500).json({message: "Not delete info"})
    }
})
app.put("/update-post/:id", async (req, res) => {
    try {
        const {id} = req.params
        const {body} = req
        const updatedPost = await PostModel.findByIdAndUpdate(id, body, { new: true })
        updatedPot.save()
        res.status(204).json({message: "Post update successfully"})
    } catch (err) {
        res.status(500).json({message: "Not post info"})
    }
})
app.get("/", async (req, res) => {
    try {
        const findAll = await PostModel.find()
        res.status(200).json(findAll)
    } catch (err) {
        res.status(500).json({message: "Internal Server Error"})
    }
})

app.listen(process.env.PORT ,  () => {
    connectDB()
    console.log("session at " , process.env.PORT)
})