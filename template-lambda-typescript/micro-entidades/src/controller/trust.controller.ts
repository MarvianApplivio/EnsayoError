import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { BoFactory } from "../bussines/bo/factory/bo.factory"
import { Utils } from "../utils/utils"


export class TrustController {

    /**
     * 
     * @param _req 
     * @param res 
     */
    public static async getTrust(_req: Request, res: Response) {
        let trustBo = BoFactory.getTrustBo();
        let trust = await trustBo.getListTrust();
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [trust])
        
    }

    /**
     * 
     * @param req 
     * @param res 
     */
    public static async getTrustPost(req: Request, res: Response) {
        
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [req.body])
        
    }
}