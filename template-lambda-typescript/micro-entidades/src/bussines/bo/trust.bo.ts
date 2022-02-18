
<<<<<<< HEAD

import { ModelFactory } from "../../models/factory/modelsFactory.factory";
=======
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
import { Trust } from "../../models/trust.model";
import { TrustRepository } from "../../repository/trust.repository"; 
import { BaseBo } from "./abstractBase.bo";

<<<<<<< HEAD
export class TrustBo extends BaseBo<TrustRepository> {//declare a class that uses the repository

    constructor() {
        super(TrustRepository);// the repository is called inside the constructor function
    
    }

    public async getListTrust(): Promise<Trust> {// the entity information is obtained in a function
        return await this.repository.findById(1)
        
    }
    /*
    public async createTrust(params: any):Promise<Trust> {
        let trust = ModelFactory.getTrustModel();
         trust.name = params.name;

         console.log(params);
         
         trust.webPage = params.web_page;
         trust.email = params.email;
         /*
         trust.address = params.address;
         trust.project = params.project;
        
         console.log(trust);
        
         
          await this.repository.save(trust);       
           return trust;                      
         */
}
=======
export class TrustBo extends BaseBo<TrustRepository> {

    constructor() {
        super(TrustRepository);
    
    }

    public async getListTrust(): Promise<Trust> {
        return await this.repository.findById(1)
        
    }

}
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
