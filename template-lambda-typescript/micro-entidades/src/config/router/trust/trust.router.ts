import express from "express";
import { TrustController } from "../../../controller/trust.controller"; 
export const router = express.Router();

router.get("/", TrustController.getTrust)
router.post("/update", TrustController.getTrustPost)
