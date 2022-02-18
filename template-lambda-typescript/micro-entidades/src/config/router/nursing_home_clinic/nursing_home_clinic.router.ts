<<<<<<< HEAD
//objects and classes are imported to establish a correct route for each entity with the database
=======
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
import express from "express";
import { Nursing_home_clinicController } from "../../../controller/nursing_home_clinic.controller";

export const router = express.Router();

<<<<<<< HEAD
router.get("/", Nursing_home_clinicController.getNursingHomeClinic)//requests to be fulfilled by the API
=======
router.get("/", Nursing_home_clinicController.getNursingHomeClinic)
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
router.post("/update", Nursing_home_clinicController.getNursingHomeClinicPost)
