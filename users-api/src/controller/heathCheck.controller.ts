import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import { Utils } from "../utils/utils"


export class HealthCheck {

    /**
     * 
     * @param _req 
     * @param res 
     */
    public static async health(_req: Request, res: Response) {
        
        Utils.response(res, StatusCodes.OK, "Api health OK")
        
    }

}