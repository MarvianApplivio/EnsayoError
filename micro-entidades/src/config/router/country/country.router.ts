import express from "express";
import { CountryController } from "../../../controller/country.controller";

export const router = express.Router();

router.get("/", CountryController.getCountry)
router.post("/update", CountryController.getCountryPost)
