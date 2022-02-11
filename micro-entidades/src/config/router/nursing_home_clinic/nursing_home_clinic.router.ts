import express from "express";
import { Nursing_home_clinicController } from "../../../controller/nursing_home_clinic.controller";

export const router = express.Router();

router.get("/", Nursing_home_clinicController.getNursingHomeClinic)
router.post("/update", Nursing_home_clinicController.getNursingHomeClinicPost)
