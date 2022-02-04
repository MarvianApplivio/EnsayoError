import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { BoFactory } from "../bussines/bo/factory/bo.factory"
import { Role } from "../models/role.model";
import { Utils } from "../utils/utils"


export class RolesController {


    public static async getRoles(req: any, res: Response) {
        console.log(req.requestTime)
        let roleBo = BoFactory.getRoleBo();
        let roles = await roleBo.getListRoles();
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [roles])
        
    }


}

