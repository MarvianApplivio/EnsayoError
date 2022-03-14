import { Clinic } from "../../models/clinic.model"; 
import { ClinicRepository } from "../../repository/clinic.repository";
import { BaseBo } from "./abstractBase.bo";
import { ModelFactory } from "../../models/factory/modelsFactory.factory";
import { BoFactory } from "./factory/bo.factory";
import { Constants } from "../../utils/contants";



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
             
            const queryRunner = this.manager.connection.createQueryRunner();
    
            await queryRunner.connect();
                //transaction because if user fail to create in cognito, user is not saved in our database
            await queryRunner.startTransaction();
    
            let countryBo = BoFactory.getCountryBo();
            let country = await countryBo.getListCountry(Constants.ENTITY_COUNTRY_PRI);
            let projectBo = BoFactory.getProjectBo();
            let project = await projectBo.getListProject(Constants.UNIQUE_PROJECT);
            let address = ModelFactory.getAddressModel(params.state, params.firstLline, params.secondLline, params.zipCode, country);
            let clinic = ModelFactory.getClinicModel(params.legalName, params.comercialName, params.webPage, params.email, params.npi, address, project);
            let phone = ModelFactory.getPhoneModel(true, params.phone, null, null, clinic, null);        
            
            try{             
                        
                if (queryRunner.manager) {
                    //transaction
                    await queryRunner.manager.save(phone);
                } else {
                    await this.saveEntities(phone);
                }
               
             } catch (error) {
                 console.log(error);
                queryRunner.rollbackTransaction();
                throw error;
             }
    
            queryRunner.commitTransaction();

            return clinic;                      
             
        }       
}



