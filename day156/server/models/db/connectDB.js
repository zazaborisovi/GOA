import mongoose from "mongoose";

export const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log("mongodb Connected to" , conn)
    } catch (err) {
        console.log(err)
    }
} 