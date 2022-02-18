import { Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm";
import { Nursing_home } from "./nursing_home.model";//ENG:The nursing home entity is imported to establish relationship. 
import { Clinic } from "./clinic.model";//ENG:The clinic entity is imported to establish relationship. 

@Entity() // ENG:Necessary decorator for entities with typeorm 
export class Nursing_home_clinic {

    @PrimaryGeneratedColumn()// ENG: Decorator to declare PK primary keys 
    id: number;

    @OneToOne(() => Nursing_home)// ENG:Necessary decorator to declare One-to-one relationship with the "nursing_home" entity. 
    @JoinColumn() // ENG:The decorator is required for the one-to-one relationship and is added only on one side of the relationship, in this case the heir. 
    nursing_home: Nursing_home;

    @OneToOne(() => Clinic)// ENG:Necessary decorator to declare One-to-one relationship with the "clinic" entity.
    @JoinColumn() // ENG:The decorator is required for the one-to-one relationship and is added only on one side of the relationship, in this case the heir.  
    clinic: Clinic;
}
