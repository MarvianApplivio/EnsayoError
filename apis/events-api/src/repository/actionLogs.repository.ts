import {EntityRepository, Repository} from "typeorm";
import { ActionLogs } from "../models/actionLogs.model";


@EntityRepository(ActionLogs)
export class ActionLogsRepository extends Repository<ActionLogs> {

    public findById(id: number) {
        return this.findOne({ id });
    }

}