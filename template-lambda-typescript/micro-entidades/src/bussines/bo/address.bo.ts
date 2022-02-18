import { Address } from "../../models/address.model"; 
import { AddressRepository } from "../../repository/address.repository";  
import { BaseBo } from "./abstractBase.bo";

export class AddressBo extends BaseBo<AddressRepository> {//declare a class that uses the repository

    constructor() { 
        super(AddressRepository);// the repository is called inside the constructor function
    
    }

    public async getListAddress(): Promise<Address> {// the entity information is obtained in a function
        return await this.repository.findById(1)
        
    }

}