import {EntityRepository, Repository} from "typeorm";
import { Country } from "../models/country.model";

@EntityRepository(Country)
export class CountryRepository extends Repository<Country> {
<<<<<<< HEAD
//create a function for the repository entity and return an id
=======

>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
    public findById(id: number) {
        return this.findOne({ id });
    }

}