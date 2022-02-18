import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { BoFactory } from "../bussines/bo/factory/bo.factory"
import { Utils } from "../utils/utils"


export class PhoneController {

    /**
     * 
     * @param _req 
     * @param res 
     */
    public static async getPhone(_req: Request, res: Response) {
        let phoneBo = BoFactory.getPhoneBo();
        let phone = await phoneBo.getListPhone();
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [phone])
        
    }

    /**
     * 
     * @param req 
     * @param res 
     */
    public static async getPhonePost(req: Request, res: Response) {
        
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [req.body])
        
    }
}
