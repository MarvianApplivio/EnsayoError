<<<<<<< HEAD
//objects and classes are imported to establish a correct route for each entity with the database
=======
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
import express from "express";
import { ProjectController } from "../../../controller/project.controller"; 
export const router = express.Router();

<<<<<<< HEAD
router.get("/", ProjectController.getProject)//requests to be fulfilled by the API

=======
router.get("/", ProjectController.getProject)
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
router.post("/update", ProjectController.getProjectPost)
