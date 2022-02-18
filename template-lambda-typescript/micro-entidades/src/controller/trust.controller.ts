import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { BoFactory } from "../bussines/bo/factory/bo.factory"
import { Utils } from "../utils/utils"


export class TrustController {// create a controller function for each entity

    /**
     * 
     * @param _req 
     * @param res 
     */
    public static async getTrust(_req: Request, res: Response) {// function to obtain the information of the entity
        let trustBo = BoFactory.getTrustBo();
        let trust = await trustBo.getListTrust();
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [trust])
        
    }

    /**
     * 
     * @param req 
     * @param res 
     */
    public static async getTrustPost(req: Request, res: Response) {// function to make a record in the entity
        
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [req.body])
        
    }
/*
     /**
     * 
     * @param _req 
     * @param res 
     
      public static async createTrust(req: Request, res: Response) {
         
        let trustBo = BoFactory.getTrustBo();
        let trust = await trustBo.createTrust(req.body);
        //let clinicDatos = await clinicBo.validarDatosClinic(Boolean);
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [trust]);
       /*if(clinicDatos==){
        res.json("the name is not correct");
       }else{

       }
        return res.json(trust);
    }
    */
}