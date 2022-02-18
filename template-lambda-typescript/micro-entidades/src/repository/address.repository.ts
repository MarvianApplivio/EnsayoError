import {EntityRepository, Repository} from "typeorm";
import { Address } from "../models/address.model";

@EntityRepository(Address)
export class AddressRepository extends Repository<Address> {//create a function for the repository entity and return an id

    public findById(id: number) {
        return this.findOne({ id });
    }

}