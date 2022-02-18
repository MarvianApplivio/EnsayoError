import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

<<<<<<< HEAD
@Entity()// ENG:Necessary decorator for entities with typeorm  
export class Action_logs {// ENG:we export and create the class or table 

    @PrimaryGeneratedColumn()// ENG: Decorator to declare PK primary keys 
=======
@Entity()
export class Action_logs {

    @PrimaryGeneratedColumn()
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
    id: number;

    @Column("varchar")
    actionName: string;

    @Column("varchar")
    metadata: string;

    @Column("varchar")
    oldValue:number ;

    @Column("varchar")
    newValue:number ;

    @Column("varchar")
    createdAt:number ;

    @Column("varchar")
    UserEntityId:number ;

}