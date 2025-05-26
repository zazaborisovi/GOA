import mongoose from `mongoose`

export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`connected to` , connection.serv)
    } catch (error) {
        console.log(`error connecting to server`)
    }
}
