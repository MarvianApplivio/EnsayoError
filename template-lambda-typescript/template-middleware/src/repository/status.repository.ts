import {EntityRepository, Repository} from "typeorm";
import { Status } from "../models/status.model";

@EntityRepository(Status)
export class StatusRepository extends Repository<Status> {

    public findById(id: number) {
        return this.findOne({ id });
    }

}