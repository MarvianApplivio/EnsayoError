import { Clinic } from "../../models/clinic.model"; 
import { ClinicRepository } from "../../repository/clinic.repository";
import { BaseBo } from "./abstractBase.bo";
<<<<<<< HEAD


import { ModelFactory } from "../../models/factory/modelsFactory.factory";
import { router } from "../../config/router/roles/roles.router";


export class ClinicBo extends BaseBo<ClinicRepository> {//declare a class that uses the repository

    constructor() {
        super(ClinicRepository);// the repository is called inside the constructor function
=======
import {  getRepository} from "typeorm";
import { Request, Response } from "express";

export class ClinicBo extends BaseBo<ClinicRepository> {

    constructor() {
        super(ClinicRepository);
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
    
        
    }

<<<<<<< HEAD
    public async getListClinic(): Promise<Clinic> {// the entity information is obtained in a function
=======
    public async getListClinic(): Promise<Clinic> {
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
        return await this.repository.findById(1)
        
    } 
   
<<<<<<< HEAD
     public async getClinic(): Promise<Clinic>{// the entity information is obtained in a function
        return await this.repository.findById(1);
    
     }
        

     public async createClinic(params: any):Promise<Clinic> { // create a function that creates a record
        let clinic = ModelFactory.getClinicModel();
         clinic.legalName= params.legal_name;
         console.log(params);
         clinic.comercialName = params.comercial_name;
         clinic.npi = params.NPI;                       //here the parameters to be saved in the database are received
         clinic.webPage= params.web_page;

         clinic.email = params.email;
         console.log(clinic);

         

          await this.repository.save(clinic);     // save the parameters in a variable  
           return clinic;                      

        }       
}



=======
     public async getClinic(): Promise<Clinic>{
        return await this.repository.findById(1);
     }
        

     
    createClinic = async (req:Request, res: Response):Promise<Response> =>{
      const newClinic = this.repository.create(req.body);
    const result= await this.repository.save(newClinic);
    return await res.json(result);
    }

}
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
