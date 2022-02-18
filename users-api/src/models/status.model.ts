import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Status {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    type: string;

    @Column("varchar")
    value: string;
    
}