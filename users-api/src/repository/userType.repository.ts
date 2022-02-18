import {EntityRepository, Repository} from "typeorm";
import { UserType } from "../models/userType.model";

@EntityRepository(UserType)
export class UserTypeRepository extends Repository<UserType> {

   
}