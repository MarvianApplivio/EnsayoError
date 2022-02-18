import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity() // ENG:Necessary decorator for entities with typeorm 
export class Country { // ENG:we export and create the class or table

    @PrimaryGeneratedColumn() // ENG: Decorator to declare PK primary keys 
    id: number;

    @Column("varchar")
    name: string;

    @Column("varchar")
    shortName: string;

    @Column("varchar")
    countryCode:number ;

}

