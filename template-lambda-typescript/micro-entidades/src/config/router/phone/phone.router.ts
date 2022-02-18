//objects and classes are imported to establish a correct route for each entity with the database
import express from "express";
import { PhoneController } from "../../../controller/phone.controller"; 
export const router = express.Router();

router.get("/", PhoneController.getPhone) //requests to be fulfilled by the API
router.post("/update",PhoneController.getPhonePost)
