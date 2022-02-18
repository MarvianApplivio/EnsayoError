import {EntityRepository, Repository} from "typeorm";
import { UserEntity } from "../models/userEntity.model";

@EntityRepository(UserEntity)
export class UserEntityRepository extends Repository<UserEntity> {

   
}