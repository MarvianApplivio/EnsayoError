import express from "express";
import { PhoneController } from "../../../controller/phone.controller"; 
export const router = express.Router();

router.get("/", PhoneController.getPhone)
router.post("/update",PhoneController.getPhonePost)
