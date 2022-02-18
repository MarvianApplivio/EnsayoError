import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { BoFactory } from "../bussines/bo/factory/bo.factory"
import { Utils } from "../utils/utils"


export class CountryController {// create a controller function for each entity

    /**
     * 
     * @param _req 
     * @param res 
     */
    public static async getCountry(_req: Request, res: Response) {// function to obtain the information of the entity
        let countryBo = BoFactory.getCountryBo();
        let country = await countryBo.getListCountry();
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [country])
        
    }

    /**
     * 
     * @param req 
     * @param res 
     */
    public static async getCountryPost(req: Request, res: Response) {// function to make a record in the entity
        
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [req.body])
        
    }
}


