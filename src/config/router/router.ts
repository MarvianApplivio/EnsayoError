import { middleware as requestTime } from "../middlewares/requestTime.middleware";
import { middleware as connDatabase } from "../middlewares/connectionDatabase.middleware";
import { middleware as errorHandler } from "../middlewares/errorHandler.middleware";
import { router as rolesRouter } from "./roles/roles.router";


export function routerApi(app: any) {

    addGeneralMiddlewares(app)
    app.use("/roles", rolesRouter)

}


function addGeneralMiddlewares(app: any) {

    app.use(requestTime);
    app.use(connDatabase);
    app.use(errorHandler);
}