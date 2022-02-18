import axios from "axios";
import e from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseMicros } from "./responseMicros.class";

export class RequestMicros {

    /**
     * 
     * @param config 
     */
    public static async do(config: {}): Promise<ResponseMicros> {

        const instance = axios.create();
        //console.log(instance.getUri(config));
        try {
            let response = await instance.request(config);
            console.log(response);
            return new ResponseMicros(response.data.code, response.data.message, response.data.data, response);
        } catch (error) {
            console.log(error);
            return new ResponseMicros(StatusCodes.SERVICE_UNAVAILABLE, "Error trying to execute a request", [], error)
        }
    }


}