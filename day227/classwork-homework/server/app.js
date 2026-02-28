const express = require('express');
const dotenv = require("dotenv").config()
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const { ExpressPeerServer } = require('peer');

const authRouter = require("./routers/auth.router")
const chatRouter = require("./routers/chat.router")
const messageRouter = require("./routers/message.router")

const app = express();
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173'
}))

app.use("/api/auth", authRouter)
app.use("/api/chat", chatRouter)
app.use("/api/message", messageRouter)

const onlineUsers = new Map()

const server = http.createServer(app);
const peerServer = ExpressPeerServer(server, {
  debug: true
});

const io = new Server(server, { // creates websocket server with cors enabled
  cors: {
    origin: 'http://localhost:5173'
  }
})

io.on('connect', (socket) => { // waits for a connection
  socket.on("register", ({odejserId, peerId}) => {
    onlineUsers.set(odejserId, {peerId})
    socket.odejserId = odejserId
  })
  socket.on("call-user" ({to , from}) =>{
    const user = onlineUsers.get(to)
    if(user){
      io.to(user.odejserId).emit("incoming-call", {from, peerId})
    }
  })
  socket.on("join" , (data) =>{
    socket.join(data.chatId)
  })
  socket.on("leave" , (data) =>{
    socket.leave(data.chatId)
  })
  socket.on("message", (data) =>{
    io.to(data.chatId).emit("message", socket.id)
  })
  socket.on("disconnect", () =>{
    console.log("user disconnected")
  })
})

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    server.listen(process.env.PORT, () => {
      console.log('server on http://localhost:' + process.env.PORT);
    })
  })

// http client side sends a request to the server and only then recieves response
// websocket is a two way communication meaning both server and client can send and recieve requests/responses anytime