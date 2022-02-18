import {EntityRepository, Repository} from "typeorm";
import { Action_logs } from "../models/action_logs.model"; 

@EntityRepository(Action_logs)
<<<<<<< HEAD
export class Action_logsRepository extends Repository<Action_logs> { //create a function for the repository entity and return an id
=======
export class Action_logsRepository extends Repository<Action_logs> {
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5

    public findById(id: number) {
        return this.findOne({ id });
    }

}