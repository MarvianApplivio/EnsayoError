import { middleware as requestTime } from "../middlewares/requestTime.middleware";
import { middleware as connDatabase } from "../middlewares/connectionDatabase.middleware";
import { middleware as errorHandler } from "../middlewares/errorHandler.middleware";
import { router as healthRouter } from "./health/health.router";
import { router as userRouter } from "./users/user.router";
import express from "express";


export function routerApi(app: any) {

    addGeneralMiddlewares(app)
    app.use("/user", userRouter)
    app.use("/health", healthRouter)


}


function addGeneralMiddlewares(app: any) {

    app.use(express.json());
    app.use(requestTime);
    app.use(connDatabase);
    app.use(errorHandler);
}