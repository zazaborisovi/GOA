const Message = require("../models/message.model")
const catchAsync = require("../utils/CatchAsync")


const sendMessage = catchAsync(async (req , res) =>{
  const {chatId , message} = req.body
    
  const msg = await Message.create({chatId , message , senderId: req.user._id})
    
  const populated = await msg.populate("senderId" , "name")
    
  req.io.to(chatId).emit("message", populated)
    
  res.status(200).json(populated)
})

const getMessages = catchAsync(async (req , res) =>{
  const {chatId} = req.params
    
  const messages = await Message.find({chatId}).populate("senderId" , "name").sort({createdAt: 1})
    
  res.status(200).json(messages)
})

module.exports = { sendMessage , getMessages }