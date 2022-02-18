import {EntityRepository, Repository} from "typeorm";
import { Address } from "../models/address.model";

@EntityRepository(Address)
<<<<<<< HEAD
export class AddressRepository extends Repository<Address> {//create a function for the repository entity and return an id
=======
export class AddressRepository extends Repository<Address> {
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5

    public findById(id: number) {
        return this.findOne({ id });
    }

}