import express from "express";
import { Action_logsController } from "../../../controller/action_logs.controller"; 
export const router = express.Router();

router.get("/", Action_logsController.getAction_logs)
router.post("/update", Action_logsController.getActionLogsPost)