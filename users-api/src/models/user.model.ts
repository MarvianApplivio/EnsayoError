import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from "typeorm";
import { Status } from "./status.model";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    firstname: string;

    @Column("varchar", {nullable: true})
    middlename: string;

    @Column("varchar")
    surname: string

    @Column("varchar", {nullable: true})
    second_surname: string

    @Column("varchar", {unique: true})
    email: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @ManyToOne( () => Status, { nullable: false})
    status: Status;

    //TODO add deletedBy and createdBy column
}