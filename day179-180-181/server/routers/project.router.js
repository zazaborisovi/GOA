import express from "express"
import { createProject, getAllProjects, getOneProject, updateOneProject } from "../connections/project.connections.js"
const router = express.Router()


router.get("/all-projects" , getAllProjects)

router.get("/:id" , getOneProject)
router.put("/:id" , updateOneProject)

router.post("/create-project" , createProject)

router.get("/all-projects/:id" , getAllUserProjects)

export default router