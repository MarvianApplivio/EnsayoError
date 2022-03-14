import { Request, Response } from "express"
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { BoFactory } from "../bussines/bo/factory/bo.factory"
import { BaseError } from "../utils/errors/base.error";
import { Utils } from "../utils/utils"


export class Nursing_homeController {// create a controller function for each entity

    /**
     * 
     * @param _req 
     * @param res 
     */
    public static async getNursingHome(_req: Request, res: Response) {// function to obtain the information of the entity
        let nursing_homeBo = BoFactory.getNursingHomeBo();
        let nursing_home = await nursing_homeBo.getListNursingHome();
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [nursing_home])
        
    }

    /**
     * 
     * @param req 
     * @param res 
     */
    public static async getNursingHomePost(req: Request, res: Response) {// function to make a record in the entity
        
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [req.body])
        
    }
      /**
     * 
     * @param _req 
     * @param res 
     */
    public static async createNursingHome (req: Request, res: Response)  {//function to create a new record of the entity
                
        try{
            
            let nursing_homeBo = BoFactory.getNursingHomeBo();
            let nursing_home = await nursing_homeBo.createNursingHome(req.body);
            
            Utils.response(res, StatusCodes.OK, "Request Succesfull", [nursing_home]);// save the information in a variable
            

        }catch (error) {
            if (error instanceof BaseError) {
                console.log(error);
                return Utils.response(res, error.statusCode, error.name);
            }
            console.log(error);
            return Utils.response(res, StatusCodes.INTERNAL_SERVER_ERROR, ReasonPhrases.INTERNAL_SERVER_ERROR);
        }
        
    }
}