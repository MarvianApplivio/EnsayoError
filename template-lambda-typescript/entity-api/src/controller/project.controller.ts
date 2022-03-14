import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { BoFactory } from "../bussines/bo/factory/bo.factory"
import { Constants } from "../utils/contants";
import { Utils } from "../utils/utils"


export class ProjectController {// create a controller function for each entity

    /**
     * 
     * @param _req 
     * @param res 
     */
    public static async getProject(_req: Request, res: Response) {// function to obtain the information of the entity
        let projectBo = BoFactory.getProjectBo();
        let project = await projectBo.getListProject(Constants.UNIQUE_PROJECT);
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [project])
        
    }

    /**
     * 
     * @param req 
     * @param res 
     */
    public static async getProjectPost(req: Request, res: Response) {// function to make a record in the entity
        
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [req.body])
        
    }
}      