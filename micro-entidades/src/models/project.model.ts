import { Entity,  PrimaryGeneratedColumn, Column,ManyToOne, } from "typeorm";

import {Trust} from "./trust.model";


@Entity()
export class Project {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    name: string;

    @Column("varchar")
    webPage: string;

    @Column("varchar")
    createAt:number ;

    @Column ("varchar")
    deletedBy:number ;

    @Column ("varchar")
    createdBy:number ;
    
    @ManyToOne(() => Trust, trust => trust.project)
    trust: Trust;


    
}