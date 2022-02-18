import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from "typeorm";
import { User } from "./user.model";

@Entity()
export class Vaccine {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    type: string;

    @Column("varchar")
    vaccineName: string;

    @Column("varchar")
    description: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne( () => User, { nullable: false} )
    user: User
    
}