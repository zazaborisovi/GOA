import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
})
export const PostModel = mongoose.model("User" , userSchema)