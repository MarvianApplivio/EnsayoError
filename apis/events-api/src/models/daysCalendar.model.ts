import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Calendar } from "./calendar.model";
import { Status } from "./status.model";

@Entity()
export class DaysCalendar {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne ( () => Status,{nullable: false})
    statusDayId: Status;

    @ManyToOne ( () => Calendar,{nullable: false})
    calendarId: Calendar;
    
}