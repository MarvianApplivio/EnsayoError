import { Entity, Column, OneToOne, PrimaryGeneratedColumn, JoinColumn, OneToMany } from "typeorm";
import {Address} from "./address.model";
import {Project} from "./project.model";

@Entity()
export class Trust {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    name: string;

    @Column("varchar")
    webPage: string;

    @Column("varchar")
    createAt:number ;

    @Column("varchar")
    email:string;

    @Column ("varchar")
    deletedAt:number ;

    @Column ("varchar")
    deletedBy:number;

    @Column ("varchar")
    createdBy:number;

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address;

    @OneToMany(() => Project, project => project.trust)
    project: Project[];

   

   
}