import express from "express";
import { AddressController } from "../../../controller/address.controller";
export const router = express.Router();

router.get("/", AddressController.getAddress)
router.post("/update", AddressController.getAddressPost)
