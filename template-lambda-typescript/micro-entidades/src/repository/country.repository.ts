import {EntityRepository, Repository} from "typeorm";
import { Country } from "../models/country.model";

@EntityRepository(Country)
export class CountryRepository extends Repository<Country> {

    public findById(id: number) {
        return this.findOne({ id });
    }

}