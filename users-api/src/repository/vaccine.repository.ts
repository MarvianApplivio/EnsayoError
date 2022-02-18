import {EntityRepository, Repository} from "typeorm";
import { Vaccine } from "../models/vaccine.model";

@EntityRepository(Vaccine)
export class VaccineRepository extends Repository<Vaccine> {

    public findById(id: number) {
        return this.findOne({ id });
    }

}