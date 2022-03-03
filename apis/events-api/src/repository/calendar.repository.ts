import {EntityRepository, Repository} from "typeorm";
import { Calendar } from "../models/calendar.model";


@EntityRepository(Calendar)
export class CalendarRepository extends Repository<Calendar> {

    public findById(id: number) {
        return this.findOne({ id });
    }

}