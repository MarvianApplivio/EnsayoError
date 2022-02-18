import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { BoFactory } from "../bussines/bo/factory/bo.factory"
import { Utils } from "../utils/utils"


<<<<<<< HEAD
export class Nursing_home_clinicController {// create a controller function for each entity
=======
export class Nursing_home_clinicController {
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5

    /**
     * 
     * @param _req 
     * @param res 
     */
<<<<<<< HEAD
    public static async getNursingHomeClinic(_req: Request, res: Response) {// function to obtain the information of the entity
=======
    public static async getNursingHomeClinic(_req: Request, res: Response) {
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
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
<<<<<<< HEAD
        // function to make a record in the entity
=======
        
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [req.body])
        
    }
}