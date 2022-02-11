
import { Entity, Column, OneToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import {Country} from "./country.model";

@Entity()
export class Address {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    state: string;

    @Column("varchar")
    firstLline: string;

    @Column("varchar")
    secondLline:number ;

    @Column("varchar")
    zipCode:number;


    @OneToOne(() => Country)
    @JoinColumn()
    
    Country: Country;

}