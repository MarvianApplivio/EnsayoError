
import { Entity, Column, OneToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
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
    secondLline:number ;

    @Column("varchar")
    zipCode:number;


    @OneToOne(() => Country)// ENG:Necessary decorator to declare One-to-one relationship with the country entity. 
    @JoinColumn() // ENG:The decorator is required for the one-to-one relationship and is added only on one side of the relationship, in this case the heir. 
    
    Country: Country;

}