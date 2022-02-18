import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { BoFactory } from "../bussines/bo/factory/bo.factory"
import { Utils } from "../utils/utils"


<<<<<<< HEAD
export class ProjectController {// create a controller function for each entity
=======
export class ProjectController {
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5

    /**
     * 
     * @param _req 
     * @param res 
     */
<<<<<<< HEAD
    public static async getProject(_req: Request, res: Response) {// function to obtain the information of the entity
=======
    public static async getProject(_req: Request, res: Response) {
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
        let projectBo = BoFactory.getProjectBo();
        let project = await projectBo.getListProject();
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [project])
        
    }

    /**
     * 
     * @param req 
     * @param res 
     */
<<<<<<< HEAD
    public static async getProjectPost(req: Request, res: Response) {// function to make a record in the entity
=======
    public static async getProjectPost(req: Request, res: Response) {
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
        
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [req.body])
        
    }
}      