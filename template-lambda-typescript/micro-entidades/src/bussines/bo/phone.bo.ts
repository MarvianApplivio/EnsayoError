import { Phone } from "../../models/phone.model";
import { PhoneRepository } from "../../repository/phone.repository";
import { BaseBo } from "./abstractBase.bo";

<<<<<<< HEAD
export class PhoneBo extends BaseBo<PhoneRepository> {//declare a class that uses the repository

    constructor() {
        super(PhoneRepository);// the repository is called inside the constructor function
    
    }

    public async getListPhone(): Promise<Phone> {// the entity information is obtained in a function
=======
export class PhoneBo extends BaseBo<PhoneRepository> {

    constructor() {
        super(PhoneRepository);
    
    }

    public async getListPhone(): Promise<Phone> {
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
        return await this.repository.findById(1)
        
    }

}