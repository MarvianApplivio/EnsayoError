//objects and classes are imported to establish a correct route for each entity with the database

import express from "express";
import { ClinicController } from "../../../controller/clinic.controller"; 
import { body, check, Result, validationResult } from 'express-validator';
import { Check } from "typeorm";
import { Clinic } from "../../../models/clinic.model";
import { json } from "stream/consumers";
import { Utils } from "../../../utils/utils";
import { resolve } from "path/posix";
const { checkSchema } = require('express-validator');


export const router = express.Router();
router.use(express.json())



router.get("/clinic",ClinicController.getClinic); //requests to be fulfilled by the API

//router.post("/update", ClinicController.getClinic);


                                                                                         
router.post("/", [ // post request with form data validation
  check("legal_name").isLength({min: 3})
  .isEmpty().withMessage("por favor ingrese un nombre correcto"),
  check("comercial_name").isLength({min:3}).
  isEmpty().withMessage("por favor ingrese un nombre correcto"),
  check("NPI").isNumeric().
  withMessage("por favor ingrese un numero de 10 digitos").isEmpty(),
  check("web_page").isFQDN()
  .isEmpty().withMessage("ingrese una pagina web correcta"),//domain data validation
  check("email").isEmail()
  .isEmpty().withMessage("ingrese un correo valido")

],

(req, res) => { // if there is an error in the validation send me error messages
  const errors = validationResult(req) 
  if (!errors.isEmpty()) {             
    return res.status(422).json({ errors: errors.array()})
  } 
  ClinicController.createClinic}) //otherwise send the form data to the create function via the controller



  