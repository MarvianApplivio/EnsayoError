//objects and classes are imported to establish a correct route for each entity with the database
import express from "express";
import { ProjectController } from "../../../controller/project.controller"; 
export const router = express.Router();

router.get("/", ProjectController.getProject)//requests to be fulfilled by the API

router.post("/update", ProjectController.getProjectPost)
