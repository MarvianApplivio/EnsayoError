import { ModelFactory } from "../../models/factory/modelsFactory.factory";
import { Nursing_home } from "../../models/nursing_home.model";
import { Nursing_homeRepository } from "../../repository/nursing_home.repository";
import { BaseBo } from "./abstractBase.bo";
import { BoFactory } from "./factory/bo.factory";
import { Constants } from "../../utils/contants";

export class Nursing_homeBo extends BaseBo<Nursing_homeRepository> {//declare a class that uses the repository

    constructor() {
        super(Nursing_homeRepository);// the repository is called inside the constructor function
    
    }

    public async getListNursingHome(): Promise<Nursing_home> {// the entity information is obtained in a function
        return await this.repository.findById(4)
        
    }

    public async createNursingHome(params: any):Promise<Nursing_home> {// create a function that creates a record
        
        const queryRunner = this.manager.connection.createQueryRunner();

        await queryRunner.connect();
            //transaction because if user fail to create in cognito, user is not saved in our database
        await queryRunner.startTransaction();

        let countryBo = BoFactory.getCountryBo();
        let country = await countryBo.getListCountry(Constants.ENTITY_COUNTRY_PRI);
        let projectBo = BoFactory.getProjectBo();
        let project = await projectBo.getListProject(Constants.UNIQUE_PROJECT);
        let address = ModelFactory.getAddressModel(params.state, params.firstLline, params.secondLline, params.zipCode, country);
        let nursing_home = ModelFactory.getNursing_homeModel(params.legalName, params.comercialName, params.webPage, params.email, params.npi, address, project);
        let phone = ModelFactory.getPhoneModel(true, params.phone, null, nursing_home, null, null);        
        try{             
                    
            if (queryRunner.manager) {
                //transaction
                await queryRunner.manager.save(phone);
            } else {
                await this.saveEntities(phone);
            }
           
         } catch (error) {
            queryRunner.rollbackTransaction();
            throw error;
         }

        queryRunner.commitTransaction();
        return nursing_home;                      
         
    }   

}