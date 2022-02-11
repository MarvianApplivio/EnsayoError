import {EntityRepository, Repository} from "typeorm";
import { Nursing_home } from "../models/nursing_home.model"; 

@EntityRepository(Nursing_home)
export class Nursing_homeRepository extends Repository<Nursing_home> {

    public findById(id: number) {
        return this.findOne({ id });
    }

}