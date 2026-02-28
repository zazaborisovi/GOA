const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const { v4: uuidV4 } = require('uuid');

const app = express();
const server = http.createServer(app);
const io = new Server(server)


app.get("/" , (req , res) =>{
  res.redirect(`/${uuidV4()}`)
})

app.use(express.static("public"))

app.get("/:room", (req, res) =>{
  res.sendFile(__dirname + "public/index.html")
})

io.on('connection', (socket) => {
  socket.on("join-room" , (roomId , userId) =>{
    socket.join(roomId)
    socket.to(roomId).broadcast.emit("user-connected" , userId)
    socket.on("disconnect" , () =>{
      socket.to(roomId).broadcast.emit("user-disconnected" , userId)
    })
  })
});

server.listen(3000, () => {
  console.log("Server is running on port 3000")
})
