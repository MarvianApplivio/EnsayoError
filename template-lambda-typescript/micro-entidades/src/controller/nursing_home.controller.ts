import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { BoFactory } from "../bussines/bo/factory/bo.factory"
import { Utils } from "../utils/utils"


export class Nursing_homeController {// create a controller function for each entity

    /**
     * 
     * @param _req 
     * @param res 
     */
    public static async getNursingHome(_req: Request, res: Response) {// function to obtain the information of the entity
        let nursing_homeBo = BoFactory.getNursingHomeBo();
        let nursing_home = await nursing_homeBo.getListNursingHome();
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [nursing_home])
        
    }

    /**
     * 
     * @param req 
     * @param res 
     */
    public static async getNursingHomePost(req: Request, res: Response) {// function to make a record in the entity
        
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [req.body])
        
    }
      /**
     * 
     * @param _req 
     * @param res 
     */
       public static async createNursingHome (req: Request, res: Response) {//function to create a new record of the entity
         
        let nursing_homeBo = BoFactory.getNursingHomeBo();
        let nursing_home = await nursing_homeBo.createNursingHome(req.body);
        //let clinicDatos = await clinicBo.validarDatosClinic(Boolean);
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [nursing_home]);// save the information in a variable
       /*if(clinicDatos==){
        res.json("the name is not correct");
       }else{

       }*/
        return res.json(nursing_home);
    }
}