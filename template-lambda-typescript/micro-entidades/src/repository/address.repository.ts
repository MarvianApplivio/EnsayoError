import {EntityRepository, Repository} from "typeorm";
import { Address } from "../models/address.model";

@EntityRepository(Address)
export class AddressRepository extends Repository<Address> {

    public findById(id: number) {
        return this.findOne({ id });
    }

}