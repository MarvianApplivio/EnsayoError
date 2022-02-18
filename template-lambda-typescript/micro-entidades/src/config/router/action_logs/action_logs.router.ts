//objects and classes are imported to establish a correct route for each entity with the database

import express from "express";
import { Action_logsController } from "../../../controller/action_logs.controller"; 
export const router = express.Router();

router.get("/", Action_logsController.getAction_logs)             //requests to be fulfilled by the API
router.post("/update", Action_logsController.getActionLogsPost)