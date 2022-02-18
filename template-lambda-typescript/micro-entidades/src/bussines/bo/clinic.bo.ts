import { Clinic } from "../../models/clinic.model"; 
import { ClinicRepository } from "../../repository/clinic.repository";
import { BaseBo } from "./abstractBase.bo";


import { ModelFactory } from "../../models/factory/modelsFactory.factory";
import { router } from "../../config/router/roles/roles.router";


export class ClinicBo extends BaseBo<ClinicRepository> {//declare a class that uses the repository

    constructor() {
        super(ClinicRepository);// the repository is called inside the constructor function
    
        
    }

    public async getListClinic(): Promise<Clinic> {// the entity information is obtained in a function
        return await this.repository.findById(1)
        
    } 
   
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



