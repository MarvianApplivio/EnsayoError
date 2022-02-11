import {EntityRepository, Repository} from "typeorm";
import { Trust } from "../models/trust.model"; 

@EntityRepository(Trust)
export class TrustRepository extends Repository<Trust> {

    public findById(id: number) {
        return this.findOne({ id });
    }

}