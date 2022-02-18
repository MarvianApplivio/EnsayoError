//objects and classes are imported to establish a correct route for each entity with the database
import express from "express";
import { CountryController } from "../../../controller/country.controller";

export const router = express.Router();

router.get("/", CountryController.getCountry)//requests to be fulfilled by the API
router.post("/update", CountryController.getCountryPost)
