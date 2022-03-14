import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Nursing_home } from "./nursing_home.model";//ENG:The nursing home entity is imported to establish relationship. 
import { Clinic } from "./clinic.model";//ENG:The clinic entity is imported to establish relationship. 

@Entity() // ENG:Necessary decorator for entities with typeorm 
export class Nursing_home_clinic {

    @PrimaryGeneratedColumn()// ENG: Decorator to declare PK primary keys 
    id: number;

    @ManyToOne(() => Nursing_home, { nullable: true })     
    nursing_home: Nursing_home;

    @ManyToOne(() => Clinic, { nullable: true }) 
    clinic: Clinic;
}
