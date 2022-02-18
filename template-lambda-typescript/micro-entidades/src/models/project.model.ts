import { Entity,  PrimaryGeneratedColumn, Column,ManyToOne, } from "typeorm";

import {Trust} from "./trust.model";//ENG:The trust entity is imported to establish relationship. 



@Entity()// ENG:Necessary decorator for entities with typeorm 
export class Project {

    @PrimaryGeneratedColumn()// ENG: Decorator to declare PK primary keys 
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
    
    @ManyToOne(() => Trust, trust => trust.project)//Decorator needed to declare many-to-one relationship
    trust: Trust;


    
}