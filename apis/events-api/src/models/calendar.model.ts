
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Status } from "./status.model";

@Entity()
export class Calendar {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("date")
    timeBeginAt: Date;

    @Column("date")
    timeEndAt: Date;

    @Column("date")
    dateBeginAt: Date;

    @Column("date")
    dateFinishAt: Date;

    @Column("date")
    endRepetion: Date;

    @Column("varchar")
    statusTypeRepeatId: string;

    @Column("varchar")
    repeatEvery: string;

    @Column("varchar")
    expectedDuration: string;

    @Column("int")
    maxCapacity: number;

    @ManyToOne ( () => Status,{nullable: false})
    statusDayId: Status;
    
    @Column("int")
    doctorId: number;

    @ManyToOne ( () => Status,{nullable: false})
    statusCalendarType: Status;

    @ManyToOne ( () => Status,{nullable: false})
    statusAssistanceType: Status;

    @Column("int")
    nursingHomeId: number;
}