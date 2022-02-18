import { StatusCodes } from "http-status-codes";

export class ResponseMicros {

    private _code: StatusCodes;

    private _message: string;

    private _data: any[]

    private _originalResponse: any

    /**
     * 
     * @param code 
     * @param message 
     * @param data 
     * @param originalResponse 
     */
    constructor(code: StatusCodes, message: string, data: any[], originalResponse: any) {
        this._code = code;
        this._message = message;
        this._data = data;
        this._originalResponse = originalResponse;
    }

    /**
     * 
     */
    public get code() : StatusCodes {
        return this._code
    }
 
    /**
     * 
     */
    public get message() : string {
        return this._message
    }

    /**
     * 
     */
    public get data() : any[] {
        return this._data
    }

    /**
     * 
     */
    public get originalResponse() : any {
        return this._originalResponse
    }
    

}