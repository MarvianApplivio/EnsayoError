import { Country } from "../../models/country.model"; 
import { CountryRepository } from "../../repository/country.repository"; 
import { BaseBo } from "./abstractBase.bo";

export class CountryBo extends BaseBo<CountryRepository> {

    constructor() {
        super(CountryRepository);
    
    }

    public async getListCountry(): Promise<Country> {
        return await this.repository.findById(1)
        
    }

}