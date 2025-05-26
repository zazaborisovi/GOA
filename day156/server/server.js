import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { PostModel } from "./models/postmodels.js"
import { connectDB } from "./models/db/connectDB.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 6969

app.use(express.json())
app.use(cors())

app.post("/create-post", async (req, res) => {
    console.log(req.body)
    try {
        const post = new PostModel({
            ...req.body
        })
        await post.save()

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
        const updatedPot = await PostModel.findByIdAndUpdate(id, body)
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

app.listen(PORT ,  () => {
    connectDB()
    console.log("session at " , PORT)
})