<<<<<<< HEAD
//objects and classes are imported to establish a correct route for each entity with the database
import express from "express";
import { Nursing_homeController } from "../../../controller/nursing_home.controller";  
export const router = express.Router();
import { body, check, Result, validationResult } from 'express-validator';
import { Check } from "typeorm";
import { Clinic } from "../../../models/clinic.model";
import { json } from "stream/consumers";
import { Utils } from "../../../utils/utils";
import { resolve } from "path/posix";
import { ClinicController } from "../../../controller/clinic.controller";
const { checkSchema } = require('express-validator');



router.use(express.json())
router.get("/", Nursing_homeController.getNursingHome)
//router.post("/", Nursing_homeController.createNursingHome)
router.post("/update", Nursing_homeController.getNursingHomePost)//requests to be fulfilled by the API

router.post("/", [// post request with form data validation
    check("legal_name").isLength({min: 3})
    .isEmpty().withMessage("por favor ingrese un nombre correcto"),
    check("comercial_name").isLength({min:3})
    .isEmpty().withMessage("por favor ingrese un nombre correcto"),
    check("web_page").isFQDN().isEmpty()
    .withMessage("ingrese una pagina web correcta"),//domain data validation
    check("email").isEmail().isEmpty().withMessage("ingrese un correo valido"),
    check("NPI").isNumeric()
    .withMessage("por favor ingrese un numero de 10 digitos").isEmpty()
  ],
  
  (req, res) => {// if there is an error in the validation send me error messages
    const errors = validationResult(req) 
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array()})
    } 
    Nursing_homeController.createNursingHome})//otherwise send the form data to the create function via the controller
=======
import express from "express";
import { Nursing_homeController } from "../../../controller/nursing_home.controller";  
export const router = express.Router();

router.get("/", Nursing_homeController.getNursingHome)
router.post("/update", Nursing_homeController.getNursingHomePost)
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
