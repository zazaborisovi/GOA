const mongoose = require("mongoose")

const ChatSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  creator:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  ]
}, {timestamps: true})

const Chat = mongoose.model("Chat", ChatSchema)

module.exports = Chat