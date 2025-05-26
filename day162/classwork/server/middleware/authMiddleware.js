import jwt from "jsonwebtoken"
import { User } from "../models/userModel.js"

export const protectUser = async (req , res , next) =>{
    try {
        const token = req.cookie.token
        if (!token){
            req.status(401).json({message: "not authorized"})
        }

        const decoded = jwt.verify(token , process.env.JWT_SECRET)
        req.user = await User.findById(decoded.id).select("-password")
        next()
    } catch (error) {
        
    }
}