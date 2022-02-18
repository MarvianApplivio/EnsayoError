

import { ModelFactory } from "../../models/factory/modelsFactory.factory";
import { Trust } from "../../models/trust.model";
import { TrustRepository } from "../../repository/trust.repository"; 
import { BaseBo } from "./abstractBase.bo";

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
