import { Phone } from "../../models/phone.model";
import { PhoneRepository } from "../../repository/phone.repository";
import { BaseBo } from "./abstractBase.bo";

export class PhoneBo extends BaseBo<PhoneRepository> {

    constructor() {
        super(PhoneRepository);
    
    }

    public async getListPhone(): Promise<Phone> {
        return await this.repository.findById(1)
        
    }

}