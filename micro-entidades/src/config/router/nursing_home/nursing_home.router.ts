import express from "express";
import { Nursing_homeController } from "../../../controller/nursing_home.controller";  
export const router = express.Router();

router.get("/", Nursing_homeController.getNursingHome)
router.post("/update", Nursing_homeController.getNursingHomePost)
