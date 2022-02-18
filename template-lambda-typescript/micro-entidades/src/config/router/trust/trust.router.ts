//objects and classes are imported to establish a correct route for each entity with the database
import express from "express";
import { TrustController } from "../../../controller/trust.controller"; 
export const router = express.Router();

router.get("/trust", TrustController.getTrust)//requests to be fulfilled by the API

//router.post("/", TrustController.createTrust)
router.post("/update", TrustController.getTrustPost)
