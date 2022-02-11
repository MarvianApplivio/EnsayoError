import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Country {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    name: string;

    @Column("varchar")
    shortName: string;

    @Column("varchar")
    countryCode:number ;

}

