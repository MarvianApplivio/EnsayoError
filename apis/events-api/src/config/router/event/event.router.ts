import express from "express";
import { EventController } from "../../../controller/event.controller";

export const eventrouter = express.Router();

console.log("Tomando peticion");
eventrouter.get("/hola", EventController.getEvent)
eventrouter.post("/createDate", EventController.createEvent)