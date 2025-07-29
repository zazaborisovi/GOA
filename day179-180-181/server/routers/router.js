import express from "express";
const router = express.Router();
import routerProjects from "./project.router.js"

router.use("/projects" , routerProjects)

export default router;
