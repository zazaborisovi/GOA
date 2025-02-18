import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: String,
    userName: String,
})
export const User = mongoose.model("User" , userSchema)