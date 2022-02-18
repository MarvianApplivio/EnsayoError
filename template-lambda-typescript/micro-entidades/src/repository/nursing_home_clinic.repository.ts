import {EntityRepository, Repository} from "typeorm";
import { Nursing_home_clinic } from "../models/nursing_home_clinic.model"; 

@EntityRepository(Nursing_home_clinic)
export class Nursing_home_clinicRepository extends Repository<Nursing_home_clinic> {
<<<<<<< HEAD
//create a function for the repository entity and return an id
=======

>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
    public findById(id: number) {
        return this.findOne({ id });
    }

}