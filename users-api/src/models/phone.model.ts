import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./user.model";

@Entity()
export class Phone {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", {length: 10})
    number: string

    @Column("varchar", {length: 10, nullable: true})
    extension: string

    @Column("boolean", {default: false})
    is_mobile: boolean

    @ManyToOne(() => User, { nullable: false })
    user: User

}