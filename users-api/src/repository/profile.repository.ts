import {EntityRepository, Repository} from "typeorm";
import { Profile } from "../models/profile.model";

@EntityRepository(Profile)
export class ProfileRepository extends Repository<Profile> {

   
}