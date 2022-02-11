import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { BoFactory } from "../bussines/bo/factory/bo.factory"
import { Utils } from "../utils/utils"


export class Nursing_homeController {

    /**
     * 
     * @param _req 
     * @param res 
     */
    public static async getNursingHome(_req: Request, res: Response) {
        let nursing_homeBo = BoFactory.getNursingHomeBo();
        let nursing_home = await nursing_homeBo.getListNursingHome();
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [nursing_home])
        
    }

    /**
     * 
     * @param req 
     * @param res 
     */
    public static async getNursingHomePost(req: Request, res: Response) {
        
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [req.body])
        
    }
}