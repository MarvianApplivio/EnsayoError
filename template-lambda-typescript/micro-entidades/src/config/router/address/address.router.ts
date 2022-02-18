//objects and classes are imported to establish a correct route for each entity with the database

import express from "express";
import { AddressController } from "../../../controller/address.controller";
export const router = express.Router();

router.get("/", AddressController.getAddress)  //requests to be fulfilled by the API
router.post("/update", AddressController.getAddressPost)
