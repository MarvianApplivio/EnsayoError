import { Entity,  PrimaryGeneratedColumn, Column,ManyToOne, } from "typeorm";

<<<<<<< HEAD
import {Trust} from "./trust.model";//ENG:The trust entity is imported to establish relationship. 



@Entity()// ENG:Necessary decorator for entities with typeorm 
export class Project {

    @PrimaryGeneratedColumn()// ENG: Decorator to declare PK primary keys 
=======
import {Trust} from "./trust.model";


@Entity()
export class Project {

    @PrimaryGeneratedColumn()
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
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
    
<<<<<<< HEAD
    @ManyToOne(() => Trust, trust => trust.project)//Decorator needed to declare many-to-one relationship
=======
    @ManyToOne(() => Trust, trust => trust.project)
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
    trust: Trust;


    
}