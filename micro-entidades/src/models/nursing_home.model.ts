import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import {Project} from "./project.model";

@Entity()
export class Nursing_home {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    legalName: string;

    @Column("varchar")
    comercialName: string;

    @Column("varchar")
    webPage:string ;

    @Column("varchar")
    email:string ;

    @Column ("varchar")
    npi:string ;

    @Column("varchar")
    createdAt:number ;

    @Column("varchar")
    deletedAt:number ;

    @Column("varchar")
    deletedBy:number ;

    @Column("varchar")
    createdBy:number ;

    @ManyToMany(() => Project)
    @JoinTable()
    project: Project[];



}