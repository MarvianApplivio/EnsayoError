import { Address } from "../../models/address.model"; 
import { AddressRepository } from "../../repository/address.repository";  
import { BaseBo } from "./abstractBase.bo";

<<<<<<< HEAD
export class AddressBo extends BaseBo<AddressRepository> {//declare a class that uses the repository

    constructor() { 
        super(AddressRepository);// the repository is called inside the constructor function
    
    }

    public async getListAddress(): Promise<Address> {// the entity information is obtained in a function
=======
export class AddressBo extends BaseBo<AddressRepository> {

    constructor() {
        super(AddressRepository);
    
    }

    public async getListAddress(): Promise<Address> {
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
        return await this.repository.findById(1)
        
    }

}