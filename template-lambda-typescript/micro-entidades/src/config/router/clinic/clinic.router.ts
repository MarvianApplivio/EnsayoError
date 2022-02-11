import express from "express";
import { ClinicController } from "../../../controller/clinic.controller"; 

export const router = express.Router();

router.get("/", ClinicController.getClinic)
router.get("/clinic",ClinicController.getClinic);
router.post("/clinic",ClinicController.createClinic);


router.post("/update", ClinicController.getClinic)

