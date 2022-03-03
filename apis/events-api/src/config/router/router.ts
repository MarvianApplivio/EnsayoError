import { middleware as requestTime } from "../middlewares/requestTime.middleware";
import { middleware as connDatabase } from "../middlewares/connectionDatabase.middleware";
import { middleware as errorHandler } from "../middlewares/errorHandler.middleware";
import { router as rolesRouter } from "./roles/roles.router";
import { eventrouter as eventRouter } from "./event/event.router";
import express from "express";



export function routerApi(app: any) {

    addGeneralMiddlewares(app)
    app.use("/roles", rolesRouter)
    app.use("/event", eventRouter)
    app.use("/calendar", rolesRouter)

}


function addGeneralMiddlewares(app: any) {

    app.use(express.json());
    app.use(connDatabase);
    
}