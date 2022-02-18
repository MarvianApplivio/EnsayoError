<<<<<<< HEAD
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
=======
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
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
}