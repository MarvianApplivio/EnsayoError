import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { BoFactory } from "../bussines/bo/factory/bo.factory"
import { Utils } from "../utils/utils"


<<<<<<< HEAD
export class TrustController {// create a controller function for each entity
=======
export class TrustController {
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5

    /**
     * 
     * @param _req 
     * @param res 
     */
<<<<<<< HEAD
    public static async getTrust(_req: Request, res: Response) {// function to obtain the information of the entity
=======
    public static async getTrust(_req: Request, res: Response) {
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
        let trustBo = BoFactory.getTrustBo();
        let trust = await trustBo.getListTrust();
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [trust])
        
    }

    /**
     * 
     * @param req 
     * @param res 
     */
<<<<<<< HEAD
    public static async getTrustPost(req: Request, res: Response) {// function to make a record in the entity
=======
    public static async getTrustPost(req: Request, res: Response) {
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
        
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [req.body])
        
    }
<<<<<<< HEAD
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
=======
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
}