<<<<<<< HEAD
import { Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { ErrorDetails } from "../../utils/errors/errorDetails.error";
import { Utils } from "../../utils/utils"; 

export function middleware(err: any, _req: Request, res: Response, _next: Function) {
    
    if (err instanceof ErrorDetails) {
        Utils.response(res, err.statusCode, err.errorMessage);
    } else {
        console.error(err);
        Utils.response(res, StatusCodes.INTERNAL_SERVER_ERROR, ReasonPhrases.INTERNAL_SERVER_ERROR);
    }

=======
import { Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { ErrorDetails } from "../../utils/errors/errorDetails.error";
import { Utils } from "../../utils/utils"; 

export function middleware(err: any, _req: Request, res: Response, _next: Function) {
    
    if (err instanceof ErrorDetails) {
        Utils.response(res, err.statusCode, err.errorMessage);
    } else {
        console.error(err);
        Utils.response(res, StatusCodes.INTERNAL_SERVER_ERROR, ReasonPhrases.INTERNAL_SERVER_ERROR);
    }

>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
}