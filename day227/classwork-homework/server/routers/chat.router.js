const chatRouter = require("express").Router()
const {createChat , getUsers , getMyChats} = require("../controllers/chat.controller")
const protect = require("../middlewares/auth.middleware")

chatRouter.get("/users" , protect , getUsers)
chatRouter.post("/" , protect , createChat)
chatRouter.get("/" , protect , getMyChats)

module.exports = chatRouter