import express from "express";

import { ProjectController } from "../controllers/projectController";

const router = express.Router();
const projectController = new ProjectController();

// Define routes
router.get("/projects", projectController.getAllprojects);
router.post("/projects", projectController.createproject);
router.get("/projects/:id", projectController.getprojectById);
router.put("/projects/:id", projectController.updateprojectById);
router.delete("/projects/:id", projectController.deleteprojectById);

export default router;
