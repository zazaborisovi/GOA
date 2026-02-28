const { getPosts } = require('../controllers/post.controller')

const postRouter = require('express').Router()

postRouter.get("/", getPosts)
postRouter.post("/upload", uploadPost)
postRouter.put("/update/:id", updatePost)
postRouter.delete("/delete/:id", deletePost)

module.exports = postRouter