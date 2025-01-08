import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.get(`/` , (req , res) => {
    res.send("hello world")
})
app.listen(process.env.PORT , (err) => {
    console.log(`server working on localhost:${process.env.PORT}`)
})
