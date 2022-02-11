import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { BoFactory } from "../bussines/bo/factory/bo.factory"
import { Utils } from "../utils/utils"


export class CountryController {

    /**
     * 
     * @param _req 
     * @param res 
     */
    public static async getCountry(_req: Request, res: Response) {
        let countryBo = BoFactory.getCountryBo();
        let country = await countryBo.getListCountry();
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [country])
        
    }

    /**
     * 
     * @param req 
     * @param res 
     */
    public static async getCountryPost(req: Request, res: Response) {
        
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [req.body])
        
    }
}


