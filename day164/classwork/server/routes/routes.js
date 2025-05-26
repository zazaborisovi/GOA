import express from "express";
import { login, logout, myProfile, register } from "../controllers/controllers.js";
import { protectUser } from "../middleware/authentication.js";

const router = express.Router()

router.post("/register" , register)
router.post("/login" , login)
router.post("/logout" , logout)
router.get("/me" , protectUser , myProfile)

export default router