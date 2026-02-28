const itemRouter = require('express').Router()
const { addItem, getItems, deleteItem } = require('../controllers/item.controller')

itemRouter.post("/add", addItem)
itemRouter.post("/delete", deleteItem)
itemRouter.get("/", getItems)

module.exports = itemRouter