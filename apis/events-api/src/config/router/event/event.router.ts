import express from "express";
import { EventController } from "../../../controller/event.controller";
import { checkSchema } from "express-validator";
import { createEventValidatorSchema, getEventValidatorSchema } from "../../../validators/event.validator";

export const eventrouter = express.Router();

console.log("Tomando peticion");
eventrouter.post("/hola", EventController.getEvent);
eventrouter.post("/createDate", checkSchema(createEventValidatorSchema), EventController.createEvent);
eventrouter.get("/getEvent", checkSchema(getEventValidatorSchema), EventController.createEvent);