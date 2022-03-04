import {EntityRepository, Repository} from "typeorm";
import { Event } from "../models/event.model";


@EntityRepository(Event)
export class EventRepository extends Repository<Event> {

    public findById(id: number) {
        return this.findOne({ id });
    }

    public findOne(event) {
        return this.findOne(event);
    }
    


}