import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Action_logs {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    action_name: string;

    @Column("varchar")
    metadata: string;

    @Column("varchar")
    old_value: string;

    @Column("varchar")
    new_value: string;
    
    @Column("date")
    created_at: string;

}