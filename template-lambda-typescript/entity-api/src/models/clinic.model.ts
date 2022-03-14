import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn, ManyToOne, OneToMany } from "typeorm";
import { Address } from "./address.model";
import { Phone } from "./phone.model";
import { Project } from "./project.model";//ENG:The project entity is imported to establish relationship. 


@Entity()
export class Clinic {

    @PrimaryGeneratedColumn()// ENG:Necessary decorator for entities with typeorm 
    id: number;

    @Column("varchar")
    legalName: string;

    @Column("varchar")
    comercialName: string;

    @Column("int")
    npi:number ;

    @Column("varchar")
    webPage:string ;

    @Column("varchar")
    email:string ;

    @CreateDateColumn({nullable: true})//Special column that is automatically set to the entity's insertion time. You don't need to write a value into this column - it will be automatically set. 
    createdAt:number ;

    @DeleteDateColumn({nullable: true})//Special column that is automatically set to the entity's delete time each time you call soft-delete of entity manager or repository. You don't need to set this column - it will be automatically set.
    deletedAt:number;

    @Column("varchar",{nullable: true})
    deletedBy:number;

    @Column("varchar",{nullable: true})
    createdBy:number;

    @ManyToOne(() => Project, {nullable: true})
    project: Project;

    @ManyToOne( () => Address, { nullable: true, cascade: true } )
    address: Address;

    @OneToMany(() => Phone, phone => phone.clinic)
    phones: Phone[];


}