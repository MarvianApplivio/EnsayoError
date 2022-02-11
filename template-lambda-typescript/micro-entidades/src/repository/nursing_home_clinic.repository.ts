import {EntityRepository, Repository} from "typeorm";
import { Nursing_home_clinic } from "../models/nursing_home_clinic.model"; 

@EntityRepository(Nursing_home_clinic)
export class Nursing_home_clinicRepository extends Repository<Nursing_home_clinic> {

    public findById(id: number) {
        return this.findOne({ id });
    }

}