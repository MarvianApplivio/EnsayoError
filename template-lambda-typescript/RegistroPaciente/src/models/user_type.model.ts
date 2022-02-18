import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User_type {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    name: string;
    
}