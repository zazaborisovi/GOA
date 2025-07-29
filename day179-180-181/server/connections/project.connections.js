import { ProjectModel } from "../models/project.model.js";


export const getAllProjects = async (req, res) => {
  try {
    const projects = await ProjectModel.find({});
    res.status(201).json(projects)
  } catch (error) {
    console.error("error fetching projects:", error)
    res.status(500).json({ message: "internal server error" })
  }
};

export const createProject = async (req, res) => {
    console.log(req.body)
  try {
    const project = await ProjectModel.create(req.body)
    res.status(201).json(project)
  } catch (error) {
    console.error("error creating project:", error)
    res.status(400).json({ message: "project creation failed", error })
  }
}

export const getOneProject = async (req, res) => {
  try {
    const project = await ProjectModel.findById(req.params.id)
    if (!project) {
      return res.status(404).json({ message: 'prokect not found' })
    }
    res.status(201).json(project)
  } catch (error) {
    res.status(500).json({ message: 'server error', error })
  }
}

export const updateOneProject = async (req, res) => {
  try {
    const updatedProject = await ProjectModel.findByIdAndUpdate(
      req.params.id,
      req.body,
    );
    if (!updatedProject) {
      return res.status(404).json({ message: 'project not found' })
    }

    res.status(200).json(updatedProject)
  } catch (error) {
    res.status(500).json({ message: 'server error', error })
  }
}
