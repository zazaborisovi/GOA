const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

app.use((req , res , next) =>{
    console.log(`[LOG] ${req.method} ${req.url}`)
    next()
})

app.get("/api/notes" , (req , res) => {
    res.json([
        {id:1 , text: "Learn Middleware"},
        {id:2 , text: "Test for id 2"}
    ])
})
app.listen(6969 , () => console.log(`server running on http://localhost:6969/api/notes`))