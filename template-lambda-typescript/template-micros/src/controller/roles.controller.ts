import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { BoFactory } from "../bussines/bo/factory/bo.factory"
import { Utils } from "../utils/utils"


export class RolesController {

    /**
     * 
     * @param _req 
     * @param res 
     */
    public static async getRoles(_req: Request, res: Response) {
        let roleBo = BoFactory.getRoleBo();
        let roles = await roleBo.getListRoles();
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [roles])
        
    }

    /**
     * 
     * @param req 
     * @param res 
     */
    public static async getRolesPost(req: Request, res: Response) {
        
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [req.body])
        
    }
}

