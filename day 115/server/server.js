import express from "express"
import cors from "cors"

const app = express()
app.use(cors())

const USER = {
    id: 1,
    name: "John wick",
    email: "example@gmail.com"
}

app.get("/api/user" , (req , res) =>{
    try {
        res.status(200).json(USER)        
    } catch (error){
        res.status(500).json({error: error})
    }
})

const PORT = 5000
app.listen(PORT, () =>{
    console.log(`server: http://localhost:${PORT}`)
})