import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { BoFactory } from "../bussines/bo/factory/bo.factory"
import { Utils } from "../utils/utils"


export class Nursing_home_clinicController {

    /**
     * 
     * @param _req 
     * @param res 
     */
    public static async getNursingHomeClinic(_req: Request, res: Response) {
        let nursing_home_clinicBo = BoFactory.getNursingHomeClinicBo();
        let nursing_home_clinic = await nursing_home_clinicBo.getListNursingHomeClinic();
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [nursing_home_clinic])
        
    }

    /**
     * 
     * @param req 
     * @param res 
     */
    public static async getNursingHomeClinicPost(req: Request, res: Response) {
        
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [req.body])
        
    }
}