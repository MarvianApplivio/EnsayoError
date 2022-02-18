<<<<<<< HEAD
//objects and classes are imported to establish a correct route for each entity with the database
=======
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
import express from "express";
import { PhoneController } from "../../../controller/phone.controller"; 
export const router = express.Router();

<<<<<<< HEAD
router.get("/", PhoneController.getPhone) //requests to be fulfilled by the API
=======
router.get("/", PhoneController.getPhone)
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
router.post("/update",PhoneController.getPhonePost)
