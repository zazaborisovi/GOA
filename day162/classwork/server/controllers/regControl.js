import { User } from "../models/userModel.js"
import bcrypt from "bcrypt"
import crypto from "crypto"

export const register = async(req , res) =>{
    try {
        const { username, password } = req.body
        // check if user is already exist
        const user = await User.findOne({ username })
        
        if (user){
            return res.status(400).json({message: "user already exist"})
        }
        const newPassword = crypto.createHash("sha256").update(password).digit("hex")
        const newUser = await User.create({ name , password: newPassword })
        res.status(201).json({ message: 'User registered successfully' })
      } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'User not register successfully' })
      }
}

export const login = async(req , res) =>{
    try {
        const {name, password} = req.body
        const user = await User.findone({name})
        if (!user){
            return res.status(400).json({message: "user not found"})
        }
        const isMath = await bcrypt.compare(password, user.password)
        if (!isMath) {
        res.status(500).json({ message: 'User not login successfully!' })
        }
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
            expiresIn: "1h"
        })
        res.cookie("token", token, {HttpOnly: true}).json({message: "token sent"})
        if (user && isMatch){
            res.status(200).json({message: "logged in"})
        }
    } catch (error) {
        res.status(500).json({message: "couldnt register"})
    }
}

export const logout = async(req , res) =>{
    try {
        res.clearCookie("token").json({message: "logged out succesfully"})
    } catch (error) {
        res.status(500).json({message: "couldnt register"})
    }
}

export const myProfile = async (req , res) =>{
    try {
        res.status(200).json({user: req.user})
    } catch (error) {
        
    }
}