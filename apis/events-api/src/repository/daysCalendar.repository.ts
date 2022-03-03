import {EntityRepository, Repository} from "typeorm";
import { DaysCalendar } from "../models/daysCalendar.model";


@EntityRepository(DaysCalendar)
export class DaysCalendarRepository extends Repository<DaysCalendar> {

    public findById(id: number) {
        return this.findOne({ id });
    }

}