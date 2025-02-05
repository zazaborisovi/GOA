import mongoose from "mongoose"
export const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.url)
        console.log(`mongoDB connected ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error connecting mangoDB:` , error.message)
    }
}