//objects and classes are imported to establish a correct route for each entity with the database
import express from "express";
import { Nursing_home_clinicController } from "../../../controller/nursing_home_clinic.controller";

export const router = express.Router();

router.get("/", Nursing_home_clinicController.getNursingHomeClinic)//requests to be fulfilled by the API
router.post("/update", Nursing_home_clinicController.getNursingHomeClinicPost)
