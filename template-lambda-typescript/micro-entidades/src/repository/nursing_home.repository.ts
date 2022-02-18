import {EntityRepository, Repository} from "typeorm";
import { Nursing_home } from "../models/nursing_home.model"; 

@EntityRepository(Nursing_home)
export class Nursing_homeRepository extends Repository<Nursing_home> {
<<<<<<< HEAD
//create a function for the repository entity and return an id
=======

>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
    public findById(id: number) {
        return this.findOne({ id });
    }

}