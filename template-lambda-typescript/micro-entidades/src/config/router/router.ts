import { middleware as requestTime } from "../middlewares/requestTime.middleware";
import { middleware as connDatabase } from "../middlewares/connectionDatabase.middleware";
import { middleware as errorHandler } from "../middlewares/errorHandler.middleware";
import { router as rolesRouter } from "./roles/roles.router";
import express from "express";
import { router as clinicRouter } from "./clinic/clinic.router";
import{router as countryRouter } from "./country/country.router";
import { router as addressRouter } from "./address/address.router";
import { router as trustRouter} from "./trust/trust.router";
import { router as projectRouter} from "./project/project.router"; 
import { router as nursing_homeRouter } from "./nursing_home/nursing_home.router";
import { router as nursing_home_clinicRouter } from "./nursing_home_clinic/nursing_home_clinic.router"; 
import {router as phoneRouter} from "./phone/phone.router";

export function routerApi(app: any) {

    addGeneralMiddlewares(app)
    app.use("/roles", rolesRouter)
    app.use("/country",countryRouter)
    app.use("/address", addressRouter)
    app.use("/trust", trustRouter)
    app.use("/project", projectRouter)
    app.use("/nursing_home",nursing_homeRouter)
    app.use("/clinic",clinicRouter)
    app.use("/nursing_home_clinic",nursing_home_clinicRouter)
    app.use("/phone",phoneRouter)
}


function addGeneralMiddlewares(app: any) {

    app.use(express.json());
    app.use(requestTime);
    app.use(connDatabase);
    app.use(errorHandler);
}