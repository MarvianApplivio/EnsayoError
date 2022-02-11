import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Action_logs {

    @PrimaryGeneratedColumn()
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