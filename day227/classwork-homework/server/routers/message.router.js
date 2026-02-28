const {sendMessages , getMessages} = require("../controllers/message.controller")
const messageRouter = require("express").Router()

messageRouter.get("/" , protect , sendMessages)
messageRouter.post("/:chatId" , protect , getMessages)

module.exports = messageRouter