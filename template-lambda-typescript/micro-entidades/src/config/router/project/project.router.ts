import express from "express";
import { ProjectController } from "../../../controller/project.controller"; 
export const router = express.Router();

router.get("/", ProjectController.getProject)
router.post("/update", ProjectController.getProjectPost)
