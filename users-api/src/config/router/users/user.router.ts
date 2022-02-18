import express from "express";
import { UserController } from "../../../controller/user.controller";
import { checkSchema } from "express-validator";
import { firstLoginSchema, loginUserSchema, validUserTypeSchema } from "../../../validators/user.validator";

export const router = express.Router();

router.post("/create", checkSchema(validUserTypeSchema), UserController.createUser)
router.post("/login", checkSchema(loginUserSchema), UserController.loginUser)
router.post("/change-password-first-login", checkSchema(firstLoginSchema), UserController.firstLogin)

