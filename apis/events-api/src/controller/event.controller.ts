import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { BoFactory } from "../bussines/bo/factory/bo.factory"
import { Utils } from "../utils/utils"


export class EventController {

    /**
     * 
     * @param _req 
     * @param res 
     */
    public static async getEvent(req: Request, res: Response) {

        const numero = req.body.id;
        let eventBo = BoFactory.getEventBo();
        let events = await eventBo.getListEvent(numero);
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [events]);
        
    }

    public static async createEvent(req: Request, res: Response) {

        try{ 

            const params = req.body;

            let eventBo = BoFactory.getEventBo();
            let events = await eventBo.createEvent(params);
            
            return Utils.response(res, StatusCodes.OK, "Request Succesfull", [events])
        }

        catch(error){

            console.log(error)
            return Utils.response(res, StatusCodes.INTERNAL_SERVER_ERROR, "error trying to save new event")

        }
        
        
    }
}