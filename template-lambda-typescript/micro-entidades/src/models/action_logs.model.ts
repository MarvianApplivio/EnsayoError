import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()// ENG:Necessary decorator for entities with typeorm  
export class Action_logs {// ENG:we export and create the class or table 

    @PrimaryGeneratedColumn()// ENG: Decorator to declare PK primary keys 
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