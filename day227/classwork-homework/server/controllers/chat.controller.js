const Chat = require("../models/chat.model")
const Message = require("../models/message.model")
const User = require("../models/user.model")
const catchAsync = require("../utils/CatchAsync")

const createChat = catchAsync(async (req , res) =>{
    const {title , members} = req.body
    
    const chat = await Chat.create({
      title,
      members: [...members , req.user._id],
      creator: req.user._id
    })
    
    
    const searchUsers = catchAsync()
    
    res.status(201).json(chat)
})

const getMyChats = catchAsync(async (req , res) =>{
  const chats = await Chat.find({members: req.user._id})
    .populate("members" , "name")
      
  res.status(200).json(chats)
})

const searchUsers = catchAsync(async (req , res) =>{
  const {query} = req.query
  
  if(!query || query.length < 3) return res.status(200).json([])
  
  const users = await User.find({ name: { $regex: query, $options: "i" }, _id: { $ne: req.user._id } }).select("name").limit(5)
})

module.exports = {chatCreate , getMyChats , searchUsers}