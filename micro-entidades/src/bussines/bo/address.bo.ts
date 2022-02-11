import { Address } from "../../models/address.model"; 
import { AddressRepository } from "../../repository/address.repository";  
import { BaseBo } from "./abstractBase.bo";

export class AddressBo extends BaseBo<AddressRepository> {

    constructor() {
        super(AddressRepository);
    
    }

    public async getListAddress(): Promise<Address> {
        return await this.repository.findById(1)
        
    }

}