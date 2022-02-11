import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Role {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    type: string;

    @Column("varchar")
    name: string;
}
