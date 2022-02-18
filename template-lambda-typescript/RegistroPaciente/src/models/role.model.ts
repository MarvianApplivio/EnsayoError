import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User_entity_role } from "./User_entity_role.model";

@Entity()
export class Role {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    name: string;
    
    @ManyToOne(() => User_entity_role, user_entity_role => user_entity_role.role)
    user_entity_role: User_entity_role;
    
}