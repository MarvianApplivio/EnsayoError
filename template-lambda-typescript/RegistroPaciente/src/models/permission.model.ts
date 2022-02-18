import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Permission {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    name: string;
    
    
}