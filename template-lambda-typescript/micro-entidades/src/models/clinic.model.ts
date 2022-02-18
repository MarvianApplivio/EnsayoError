import { Entity, Column, ManyToMany, JoinTable, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn } from "typeorm";
import { Project } from "./project.model";//ENG:The project entity is imported to establish relationship. 


@Entity()
export class Clinic {

    @PrimaryGeneratedColumn()// ENG:Necessary decorator for entities with typeorm 
    id: number;

    @Column("varchar")
    legalName: string;

    @Column("varchar")
    comercialName: string;

    @Column("varchar")
    npi:number ;

    @Column("varchar")
    webPage:string ;

    @Column("varchar")
    email:string ;

    @CreateDateColumn()//Special column that is automatically set to the entity's insertion time. You don't need to write a value into this column - it will be automatically set. 
    createdAt:number ;

    @DeleteDateColumn()//Special column that is automatically set to the entity's delete time each time you call soft-delete of entity manager or repository. You don't need to set this column - it will be automatically set.
    deletedAt:number;

    @Column("varchar",{nullable: true})
    deletedBy:number;

    @Column("varchar",{nullable: true})
    createdBy:number;


    @ManyToMany(() => Project)//Decorator needed to declare many-to-many relationship
    @JoinTable()//@JoinTable() is required for @ManyToMany relations. You must put @JoinTable on one (owning) side of relation.
    project: Project[];

}