import { StatusCodes } from "http-status-codes";
import { ErrorDetails } from "../errorDetails.error";
import { ForbiddenError } from "../forbidden.error";


export class ErrorFactory {


    /**
     * 
     * @param description 
     * @param previusException 
     * @returns ForbiddenError
     */
     public static getForbiddenError(description: string, previusException: Error = null): ForbiddenError {
        return new ForbiddenError(description, previusException);
    }

    public static getErrorDetails(statusCode: StatusCodes, msg: string): ErrorDetails {
        return new ErrorDetails(statusCode, msg);
    }
}