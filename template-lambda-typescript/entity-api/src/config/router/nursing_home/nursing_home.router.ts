//objects and classes are imported to establish a correct route for each entity with the database
import express from "express";
import { Nursing_homeController } from "../../../controller/nursing_home.controller";  
export const router = express.Router();
import { createEntityValidatorSchema } from "../../../validators/entity.validator";
const { checkSchema } = require('express-validator');



router.use(express.json())
router.get("/", Nursing_homeController.getNursingHome)
router.post("/update", Nursing_homeController.getNursingHomePost)//requests to be fulfilled by the API
router.post("/create", checkSchema(createEntityValidatorSchema), Nursing_homeController.createNursingHome)//otherwise send the form data to the create function via the controller