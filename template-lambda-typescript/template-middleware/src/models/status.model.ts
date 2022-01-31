import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Status {

    id: number;

    type: string;

    name: string;
    
}