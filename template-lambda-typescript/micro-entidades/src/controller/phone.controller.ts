import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { BoFactory } from "../bussines/bo/factory/bo.factory"
import { Utils } from "../utils/utils"


export class PhoneController {// create a controller function for each entity

    /**
     * 
     * @param _req 
     * @param res 
     */
    public static async getPhone(_req: Request, res: Response) {// function to obtain the information of the entity
        let phoneBo = BoFactory.getPhoneBo();
        let phone = await phoneBo.getListPhone();
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [phone])
        
    }

    /**
     * 
     * @param req 
     * @param res 
     */
    public static async getPhonePost(req: Request, res: Response) {// function to make a record in the entity
        
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [req.body])
        
    }
}
