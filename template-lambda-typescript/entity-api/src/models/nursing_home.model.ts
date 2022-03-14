import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, DeleteDateColumn, ManyToOne, OneToMany } from "typeorm";
import { Address } from "./address.model";
import { Phone } from "./phone.model";
import {Project} from "./project.model";//ENG:The project entity is imported to establish relationship. 

@Entity()// ENG:Necessary decorator for entities with typeorm 
export class Nursing_home {

    @PrimaryGeneratedColumn()// ENG: Decorator to declare PK primary keys 
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
    npi:number ;

    @CreateDateColumn()//Special column that is automatically set to the entity's insertion time. You don't need to write a value into this column - it will be automatically set. 
    createdAt:number ;

    @DeleteDateColumn()//Special column that is automatically set to the entity's delete time each time you call soft-delete of entity manager or repository. You don't need to set this column - it will be automatically set.
    deletedAt:number ;

    @Column("varchar",{nullable: true})
    deletedBy:number ;

    @Column("varchar",{nullable: true})
    createdBy:number ;

    @ManyToOne(() => Project, {nullable: true})
    project: Project;

    @ManyToOne( () => Address, { nullable: true, cascade: true } )
    address: Address;

    @OneToMany(() => Phone, phone => phone.nursing_home)
    phones: Phone[];

}