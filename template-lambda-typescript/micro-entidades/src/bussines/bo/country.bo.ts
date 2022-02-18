import { Country } from "../../models/country.model"; 
import { CountryRepository } from "../../repository/country.repository"; 
import { BaseBo } from "./abstractBase.bo";

export class CountryBo extends BaseBo<CountryRepository> {//declare a class that uses the repository

    constructor() {
        super(CountryRepository);// the repository is called inside the constructor function
    
    }

    public async getListCountry(): Promise<Country> {// the entity information is obtained in a function
        return await this.repository.findById(1)
        
    }

}