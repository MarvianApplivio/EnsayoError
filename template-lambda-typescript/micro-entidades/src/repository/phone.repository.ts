import {EntityRepository, Repository} from "typeorm";
import { Phone } from "../models/phone.model"; 

@EntityRepository(Phone)
export class PhoneRepository extends Repository<Phone> {
//create a function for the repository entity and return an id
    public findById(id: number) {
        return this.findOne({ id });
    }

}