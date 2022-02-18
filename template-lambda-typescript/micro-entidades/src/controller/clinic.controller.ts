import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { BoFactory } from "../bussines/bo/factory/bo.factory"
import { Clinic } from "../models/clinic.model";            
import { Utils } from "../utils/utils"
import { body, check, validationResult } from 'express-validator';

export class ClinicController {
// create a controller function for each entity
    /**
     * 
     * @param _req 
     * @param res 
     */
    public static async getClinic(_req: Request, res: Response) {// function to obtain the information of the entity
        let clinicBo = BoFactory.getClinicBo();
        let clinic = await clinicBo.getListClinic();
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [clinic])
        
    }

    /**
     * 
     * @param _req 
     * @param res 
     */
    public static async getClinicPost(req: Request, res: Response) {// function to make a record in the entity
        
        
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [req.body])
        
    }

    

    /**
     * 
     * @param _req 
     * @param res 
     */
     public static async createClinic(req: Request, res: Response) {//function to create a new record of the entity
         
        let clinicBo = BoFactory.getClinicBo();
        let clinic = await clinicBo.createClinic(req.body); 
         
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [clinic]); // save the information in a variable
        return res.json(Clinic);
            
         
      
    }
        

        
    
    
    
   

}
