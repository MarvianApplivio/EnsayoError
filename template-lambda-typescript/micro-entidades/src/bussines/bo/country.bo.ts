import { Country } from "../../models/country.model"; 
import { CountryRepository } from "../../repository/country.repository"; 
import { BaseBo } from "./abstractBase.bo";

<<<<<<< HEAD
export class CountryBo extends BaseBo<CountryRepository> {//declare a class that uses the repository

    constructor() {
        super(CountryRepository);// the repository is called inside the constructor function
    
    }

    public async getListCountry(): Promise<Country> {// the entity information is obtained in a function
=======
export class CountryBo extends BaseBo<CountryRepository> {

    constructor() {
        super(CountryRepository);
    
    }

    public async getListCountry(): Promise<Country> {
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
        return await this.repository.findById(1)
        
    }

}