<<<<<<< HEAD

=======
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { BoFactory } from "../bussines/bo/factory/bo.factory"
import { Utils } from "../utils/utils"


<<<<<<< HEAD
export class Action_logsController {// create a controller function for each entity
=======
export class Action_logsController {
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5

    /**
     * 
     * @param _req 
     * @param res 
     */
<<<<<<< HEAD
    public static async getAction_logs(_req: Request, res: Response) {// function to obtain the information of the entity
=======
    public static async getAction_logs(_req: Request, res: Response) {
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
        let action_logsBo = BoFactory.getActionLogsBo();
        let action_logs = await action_logsBo.getListActionLogs();
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [action_logs])
        
    }

    /**
     * 
     * @param req 
     * @param res 
     */
<<<<<<< HEAD
    public static async getActionLogsPost(req: Request, res: Response) {// function to make a record in the entity
=======
    public static async getActionLogsPost(req: Request, res: Response) {
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
        
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [req.body])
        
    }
}
