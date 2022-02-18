import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

<<<<<<< HEAD
@Entity() // ENG:Necessary decorator for entities with typeorm 
export class Country { // ENG:we export and create the class or table

    @PrimaryGeneratedColumn() // ENG: Decorator to declare PK primary keys 
=======
@Entity()
export class Country {

    @PrimaryGeneratedColumn()
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
    id: number;

    @Column("varchar")
    name: string;

    @Column("varchar")
    shortName: string;

    @Column("varchar")
    countryCode:number ;

}

