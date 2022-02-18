import {EntityRepository, Repository} from "typeorm";
import { Country } from "../models/country.model";

@EntityRepository(Country)
export class CountryRepository extends Repository<Country> {
//create a function for the repository entity and return an id
    public findById(id: number) {
        return this.findOne({ id });
    }

}