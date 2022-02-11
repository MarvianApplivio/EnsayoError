import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { BoFactory } from "../bussines/bo/factory/bo.factory"
import { Utils } from "../utils/utils"


export class Action_logsController {

    /**
     * 
     * @param _req 
     * @param res 
     */
    public static async getAction_logs(_req: Request, res: Response) {
        let action_logsBo = BoFactory.getActionLogsBo();
        let action_logs = await action_logsBo.getListActionLogs();
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [action_logs])
        
    }

    /**
     * 
     * @param req 
     * @param res 
     */
    public static async getActionLogsPost(req: Request, res: Response) {
        
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [req.body])
        
    }
}
