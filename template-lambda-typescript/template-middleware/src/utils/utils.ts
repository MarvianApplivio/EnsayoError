import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { Response } from "express";

export class Utils {

   public static response(res: Response, statusCode: StatusCodes = StatusCodes.OK, message: string = ReasonPhrases.OK, data: any[] = []) {

        let responseData = {
            code: statusCode,
            message,
            data
        }

        res.status(statusCode).json(responseData);
        
    }
}