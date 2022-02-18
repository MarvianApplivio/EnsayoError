<<<<<<< HEAD
import { Entity, Column, ManyToMany, JoinTable, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn } from "typeorm";
import { Project } from "./project.model";//ENG:The project entity is imported to establish relationship. 

=======
import { Entity, Column, ManyToMany, JoinTable, PrimaryGeneratedColumn } from "typeorm";
import { Project } from "./project.model";
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5

@Entity()
export class Clinic {

<<<<<<< HEAD
    @PrimaryGeneratedColumn()// ENG:Necessary decorator for entities with typeorm 
=======
    @PrimaryGeneratedColumn()
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
    id: number;

    @Column("varchar")
    legalName: string;

    @Column("varchar")
    comercialName: string;

    @Column("varchar")
<<<<<<< HEAD
    npi:number ;
=======
    npi:string ;
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5

    @Column("varchar")
    webPage:string ;

    @Column("varchar")
    email:string ;

<<<<<<< HEAD
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
=======
    @Column("varchar")
    createdAt:number ;

    @Column("varchar")
    deletedAt:number;

    @Column("varchar")
    deletedBy:number;

    @Column("varchar")
    createdBy:number;

  

    


    @ManyToMany(() => Project)
    @JoinTable()
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
    project: Project[];

}