import express from "express";
import { EventController } from "../../../controller/event.controller";
import { checkSchema } from "express-validator";
import { createEventValidatorSchema, getEventValidatorSchema } from "../../../validators/event.validator";
import { middleware as authorizationMiddleware } from "../../middlewares/authorization.middleware";
import { Constants } from "../../../utils/contants";

export const eventrouter = express.Router();

console.log("Tomando peticion");
eventrouter.post("/hola", EventController.getEvent);

eventrouter.post("/createDate", authorizationMiddleware([
    Constants.COGNITO_USER_GROUP_ADMIN, 
    Constants.COGNITO_USER_GROUP_DOCTOR, 
    Constants.COGNITO_USER_GROUP_NURSE,
    Constants.COGNITO_USER_GROUP_SECRETARY
]), checkSchema(createEventValidatorSchema), EventController.createEvent);

eventrouter.get("/getEvent", checkSchema(getEventValidatorSchema), EventController.createEvent);