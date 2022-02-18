import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { BoFactory } from "../bussines/bo/factory/bo.factory"
<<<<<<< HEAD
import { Clinic } from "../models/clinic.model";            
import { Utils } from "../utils/utils"
import { body, check, validationResult } from 'express-validator';

export class ClinicController {
// create a controller function for each entity
=======
import { Utils } from "../utils/utils"


export class ClinicController {

>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
    /**
     * 
     * @param _req 
     * @param res 
     */
<<<<<<< HEAD
    public static async getClinic(_req: Request, res: Response) {// function to obtain the information of the entity
=======
    public static async getClinic(_req: Request, res: Response) {
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
        let clinicBo = BoFactory.getClinicBo();
        let clinic = await clinicBo.getListClinic();
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [clinic])
        
    }

    /**
     * 
     * @param _req 
     * @param res 
     */
<<<<<<< HEAD
    public static async getClinicPost(req: Request, res: Response) {// function to make a record in the entity
        
=======
    public static async getClinicPost(req: Request, res: Response) {
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
        
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [req.body])
        
    }

    

    /**
     * 
     * @param _req 
     * @param res 
     */
<<<<<<< HEAD
     public static async createClinic(req: Request, res: Response) {//function to create a new record of the entity
         
        let clinicBo = BoFactory.getClinicBo();
        let clinic = await clinicBo.createClinic(req.body); 
         
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [clinic]); // save the information in a variable
        return res.json(Clinic);
            
         
      
    }
        

        
    
    
    
   

=======
     public static async createClinic(req: Request, res: Response) {
        let clinicBo = BoFactory.getClinicBo();
        let clinic = await clinicBo.getListClinic();
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [req.body]);
        
    }
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
}
