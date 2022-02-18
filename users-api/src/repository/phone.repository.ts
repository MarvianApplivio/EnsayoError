import {EntityRepository, Repository} from "typeorm";
import { Phone } from "../models/phone.model";

@EntityRepository(Phone)
export class PhoneRepository extends Repository<Phone> {


}