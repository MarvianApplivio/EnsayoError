
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import {Country} from "./country.model";//ENG:The country entity is imported to establish relationship. 

@Entity() // ENG:Necessary decorator for entities with typeorm 
export class Address {// ENG:we export and create the class or table 

    @PrimaryGeneratedColumn()// ENG: Decorator to declare PK primary keys 
    id: number;

    @Column("varchar")
    state: string;

    @Column("varchar")
    firstLline: string;

    @Column("varchar")
    secondLline: string;

    @Column("varchar")
    zipCode:number;

    @ManyToOne(() => Country, { nullable: false})    
    country: Country;

}