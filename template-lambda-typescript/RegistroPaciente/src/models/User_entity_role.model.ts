//import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Role } from "./role.model";

@Entity()
export class User_entity_role {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("date")
    created_ad: string;

    @OneToMany(() => Role, role => role.user_entity_role)
    user_entity_roles : Role[];
    
}