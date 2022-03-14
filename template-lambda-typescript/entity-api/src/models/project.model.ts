import { Entity,  PrimaryGeneratedColumn, Column,ManyToOne, CreateDateColumn, } from "typeorm";
import { Address } from "./address.model";

import {Trust} from "./trust.model";//ENG:The trust entity is imported to establish relationship. 



@Entity()// ENG:Necessary decorator for entities with typeorm 
export class Project {

    @PrimaryGeneratedColumn()// ENG: Decorator to declare PK primary keys 
    id: number;

    @Column("varchar")
    name: string;

    @Column("varchar")
    webPage: string;

    @CreateDateColumn()
    createAt: Date ;

    @Column ("varchar", { nullable: true })
    deletedBy:number ;

    @Column ("varchar", { nullable: true })
    createdBy:number ;

    @ManyToOne( () => Address, { nullable: true } )
    address: Address;
    
    @ManyToOne(() => Trust, { nullable: true} )//Decorator needed to declare many-to-one relationship
    trust: Trust;


    
}