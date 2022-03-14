import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Project } from "./project.model";//ENG:The project entity is imported to establish relationship. 
import { Nursing_home } from "./nursing_home.model";//ENG:The nursing home entity is imported to establish relationship. 
import { Clinic } from "./clinic.model";//ENG:The clinic entity is imported to establish relationship. 
import { Trust } from "./trust.model";
 
@Entity()// ENG:Necessary decorator for entities with typeorm 
export class Phone {

    @PrimaryGeneratedColumn()// ENG: Decorator to declare PK primary keys 
    id: number;

    @Column("varchar", {length: 11})
    number: string

    @Column("varchar", {length: 10, nullable: true})
    extension: string

    @Column("boolean", {default: false})
    is_mobile: boolean

    @ManyToOne(() => Nursing_home, nursing_home => nursing_home.phones, { nullable: true, cascade: true, eager: true })
    nursing_home: Nursing_home

    @ManyToOne(() => Project, { nullable: true, eager: true})
    project: Project;

    @ManyToOne(() => Clinic, clinic => clinic.phones, {cascade: true, nullable: true, eager: true})
    clinic: Clinic;

    @ManyToOne(() => Trust, { nullable: true, eager: true})
    trust: Trust;
    
}