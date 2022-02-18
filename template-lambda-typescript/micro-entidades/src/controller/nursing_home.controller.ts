import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes";
import { BoFactory } from "../bussines/bo/factory/bo.factory"
import { Utils } from "../utils/utils"


<<<<<<< HEAD
export class Nursing_homeController {// create a controller function for each entity
=======
export class Nursing_homeController {
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5

    /**
     * 
     * @param _req 
     * @param res 
     */
<<<<<<< HEAD
    public static async getNursingHome(_req: Request, res: Response) {// function to obtain the information of the entity
=======
    public static async getNursingHome(_req: Request, res: Response) {
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
        let nursing_homeBo = BoFactory.getNursingHomeBo();
        let nursing_home = await nursing_homeBo.getListNursingHome();
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [nursing_home])
        
    }

    /**
     * 
     * @param req 
     * @param res 
     */
<<<<<<< HEAD
    public static async getNursingHomePost(req: Request, res: Response) {// function to make a record in the entity
=======
    public static async getNursingHomePost(req: Request, res: Response) {
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
        
        Utils.response(res, StatusCodes.OK, "Request Succesfull", [req.body])
        
    }
<<<<<<< HEAD
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
=======
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
}