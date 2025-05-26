import mongoose from "mongoose";

export const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGOURI)
        console.log(`MONGODB connected ${conn.connection.host}`)
    }catch (err){
        console.log(error.message)
    }
}