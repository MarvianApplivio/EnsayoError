import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { BoFactory } from "../bussines/bo/factory/bo.factory"
import { Utils } from "../utils/utils"


export class ProjectController {

    /**
     * 
     * @param _req 
     * @param res 
     */
    public static async getProject(_req: Request, res: Response) {
        let projectBo = BoFactory.getProjectBo();
        let project = await projectBo.getListProject();
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [project])
        
    }

    /**
     * 
     * @param req 
     * @param res 
     */
    public static async getProjectPost(req: Request, res: Response) {
        
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [req.body])
        
    }
}      