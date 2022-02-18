import {EntityRepository, Repository} from "typeorm";
import { Action_logs } from "../models/action_logs.model"; 

@EntityRepository(Action_logs)
export class Action_logsRepository extends Repository<Action_logs> { //create a function for the repository entity and return an id

    public findById(id: number) {
        return this.findOne({ id });
    }

}