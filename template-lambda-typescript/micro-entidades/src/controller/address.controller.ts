import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { BoFactory } from "../bussines/bo/factory/bo.factory"
import { Utils } from "../utils/utils"


export class AddressController {// create a controller function for each entity

    /**
     * 
     * @param _req 
     * @param res 
     */
    public static async getAddress(_req: Request, res: Response) {// function to obtain the information of the entity
        let addressBo = BoFactory.getAddressBo();
        let address = await addressBo.getListAddress();
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [address])
        
    }

    /**
     * 
     * @param req 
     * @param res 
     */
    public static async getAddressPost(req: Request, res: Response) {// function to make a record in the entity
        
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [req.body])
        
    }
}
