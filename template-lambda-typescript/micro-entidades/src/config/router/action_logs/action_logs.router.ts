<<<<<<< HEAD
//objects and classes are imported to establish a correct route for each entity with the database

=======
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
import express from "express";
import { Action_logsController } from "../../../controller/action_logs.controller"; 
export const router = express.Router();

<<<<<<< HEAD
router.get("/", Action_logsController.getAction_logs)             //requests to be fulfilled by the API
=======
router.get("/", Action_logsController.getAction_logs)
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
router.post("/update", Action_logsController.getActionLogsPost)