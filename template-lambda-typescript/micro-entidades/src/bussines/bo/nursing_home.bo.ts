<<<<<<< HEAD
import { ModelFactory } from "../../models/factory/modelsFactory.factory";
=======
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
import { Nursing_home } from "../../models/nursing_home.model";
import { Nursing_homeRepository } from "../../repository/nursing_home.repository";
import { BaseBo } from "./abstractBase.bo";

<<<<<<< HEAD
export class Nursing_homeBo extends BaseBo<Nursing_homeRepository> {//declare a class that uses the repository

    constructor() {
        super(Nursing_homeRepository);// the repository is called inside the constructor function
    
    }

    public async getListNursingHome(): Promise<Nursing_home> {// the entity information is obtained in a function
=======
export class Nursing_homeBo extends BaseBo<Nursing_homeRepository> {

    constructor() {
        super(Nursing_homeRepository);
    
    }

    public async getListNursingHome(): Promise<Nursing_home> {
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
        return await this.repository.findById(1)
        
    }

<<<<<<< HEAD
    public async createNursingHome(params: any):Promise<Nursing_home> {// create a function that creates a record
        let nursing_home = ModelFactory.getNursing_homeModel()
         nursing_home.legalName= params.legal_name;
         console.log(params);
         nursing_home.comercialName = params.comercial_name;//here the parameters to be saved in the database are received
         nursing_home.webPage= params.web_page;
         nursing_home.email = params.email;
         nursing_home.npi = params.NPI;
        

         
         console.log(nursing_home);
        
         
          await this.repository.save(nursing_home);        // save the parameters in a variable  
          return nursing_home;                      
         
}

=======
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
}