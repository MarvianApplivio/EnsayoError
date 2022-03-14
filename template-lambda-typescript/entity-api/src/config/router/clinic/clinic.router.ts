//objects and classes are imported to establish a correct route for each entity with the database

import express from "express";
import { ClinicController } from "../../../controller/clinic.controller"; 
import { createEntityValidatorSchema } from "../../../validators/entity.validator";
const { checkSchema } = require('express-validator');


export const router = express.Router();
router.use(express.json())

router.get("/clinic",ClinicController.getClinic); //requests to be fulfilled by the API

//router.post("/update", ClinicController.getClinic);
                                                                                         
router.post("/create", checkSchema(createEntityValidatorSchema), ClinicController.createClinic) //otherwise send the form data to the create function via the controller



  