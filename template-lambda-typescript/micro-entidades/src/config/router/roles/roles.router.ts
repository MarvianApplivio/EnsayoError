import express from "express";
import { RolesController } from "../../../controller/roles.controller";

export const router = express.Router();

router.get("/", RolesController.getRoles)
router.post("/update", RolesController.getRolesPost)

