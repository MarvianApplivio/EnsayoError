<<<<<<< HEAD
import { StatusCodes } from "http-status-codes";
import { ErrorDetails } from "../errorDetails.error";

export class ErrorFactory {

    public static getErrorDetails(statusCode: StatusCodes, msg: string): ErrorDetails {
        return new ErrorDetails(statusCode, msg);
    }
=======
import { StatusCodes } from "http-status-codes";
import { ErrorDetails } from "../errorDetails.error";

export class ErrorFactory {

    public static getErrorDetails(statusCode: StatusCodes, msg: string): ErrorDetails {
        return new ErrorDetails(statusCode, msg);
    }
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
}