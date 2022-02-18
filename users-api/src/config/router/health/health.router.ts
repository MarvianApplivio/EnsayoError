import express from "express";
import { HealthCheck } from "../../../controller/heathCheck.controller";

export const router = express.Router();

router.get("/check", HealthCheck.health)