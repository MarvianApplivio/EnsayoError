import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { BoFactory } from "../bussines/bo/factory/bo.factory"
import { Utils } from "../utils/utils"


<<<<<<< HEAD
export class PhoneController {// create a controller function for each entity
=======
export class PhoneController {
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5

    /**
     * 
     * @param _req 
     * @param res 
     */
<<<<<<< HEAD
    public static async getPhone(_req: Request, res: Response) {// function to obtain the information of the entity
=======
    public static async getPhone(_req: Request, res: Response) {
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
        let phoneBo = BoFactory.getPhoneBo();
        let phone = await phoneBo.getListPhone();
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [phone])
        
    }

    /**
     * 
     * @param req 
     * @param res 
     */
<<<<<<< HEAD
    public static async getPhonePost(req: Request, res: Response) {// function to make a record in the entity
=======
    public static async getPhonePost(req: Request, res: Response) {
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
        
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [req.body])
        
    }
}
