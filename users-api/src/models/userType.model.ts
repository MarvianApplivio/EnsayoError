import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserType {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 50 })
    name: string;
    
}