
import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { BoFactory } from "../bussines/bo/factory/bo.factory"
import { Utils } from "../utils/utils"


export class Action_logsController {// create a controller function for each entity

    /**
     * 
     * @param _req 
     * @param res 
     */
    public static async getAction_logs(_req: Request, res: Response) {// function to obtain the information of the entity
        let action_logsBo = BoFactory.getActionLogsBo();
        let action_logs = await action_logsBo.getListActionLogs();
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [action_logs])
        
    }

    /**
     * 
     * @param req 
     * @param res 
     */
    public static async getActionLogsPost(req: Request, res: Response) {// function to make a record in the entity
        
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [req.body])
        
    }
}
