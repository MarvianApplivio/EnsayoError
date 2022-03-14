import {EntityRepository, Repository} from "typeorm";
import { Trust } from "../models/trust.model"; 

@EntityRepository(Trust)
export class TrustRepository extends Repository<Trust> {
//create a function for the repository entity and return an id
    public findById(id: number) {
        return this.findOne({ id });
    }

}