import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { BoFactory } from "../bussines/bo/factory/bo.factory"
import { Utils } from "../utils/utils"


export class ClinicController {

    /**
     * 
     * @param _req 
     * @param res 
     */
    public static async getClinic(_req: Request, res: Response) {
        let clinicBo = BoFactory.getClinicBo();
        let clinic = await clinicBo.getListClinic();
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [clinic])
        
    }

    /**
     * 
     * @param _req 
     * @param res 
     */
    public static async getClinicPost(req: Request, res: Response) {
        
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [req.body])
        
    }

    

    /**
     * 
     * @param _req 
     * @param res 
     */
     public static async createClinic(req: Request, res: Response) {
        let clinicBo = BoFactory.getClinicBo();
        let clinic = await clinicBo.getListClinic();
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [req.body]);
        
    }
}
