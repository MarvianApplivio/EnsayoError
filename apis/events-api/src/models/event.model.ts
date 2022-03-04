import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne } from "typeorm";
import { Status } from "./status.model";

@Entity()
export class Event {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", {nullable: false})
    expectedDuration: number;

    @Column("date", {nullable: false})
    beginAt: Date;

    @Column("date", {nullable: false})
    endAt: Date;

    @Column("varchar", {nullable: false})
    description: string;

    @Column("int", {nullable: false})
    orderAttention: number;

    @Column("varchar", {nullable: false})
    address: string;

    @Column("varchar")
    chiefComplaint: string;

    @Column("varchar")
    tytocareId: string;

    @Column("varchar")
    insuranceCarrier: string;

    @Column("int",{nullable: true})
    doctorUserEntityId: number;

    @ManyToOne ( () => Status,{nullable: false})
    statusPriorityId: Status;

    @ManyToOne ( () => Status,{nullable: false})
    statusAssistanceTypeId: Status;

    @Column("int")
    patientUserEntityId: number;

    @ManyToOne ( () => Status,{nullable: false})
    statusStatusId: Status;

    @Column("int")
    nurseUserEntityId: number;

    @OneToOne ( () => Event,{nullable: false})
    eventId: Event;
    
}