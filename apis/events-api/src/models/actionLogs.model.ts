import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ActionLogs {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    actionName: string;

    @Column("varchar")
    metada: string;

    @Column("varchar")
    old_value: string;

    @Column("varchar")
    new_value: string;

    @Column("varchar")
    created_at: string;

    @Column("varchar")
    user_entity: string;
    
}