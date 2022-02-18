import { Phone } from "../../models/phone.model";
import { PhoneRepository } from "../../repository/phone.repository";
import { BaseBo } from "./abstractBase.bo";

export class PhoneBo extends BaseBo<PhoneRepository> {//declare a class that uses the repository

    constructor() {
        super(PhoneRepository);// the repository is called inside the constructor function
    
    }

    public async getListPhone(): Promise<Phone> {// the entity information is obtained in a function
        return await this.repository.findById(1)
        
    }

}