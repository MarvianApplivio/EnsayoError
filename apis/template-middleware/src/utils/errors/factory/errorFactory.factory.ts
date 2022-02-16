import { StatusCodes } from "http-status-codes";
import { ErrorDetails } from "../errorDetails.error";

export class ErrorFactory {

    public static getErrorDetails(statusCode: StatusCodes, msg: string): ErrorDetails {
        return new ErrorDetails(statusCode, msg);
    }
}