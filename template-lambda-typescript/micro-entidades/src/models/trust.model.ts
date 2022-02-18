import { Entity, DeleteDateColumn, Column,CreateDateColumn, OneToOne, PrimaryGeneratedColumn, JoinColumn, OneToMany } from "typeorm";
import {Address} from "./address.model";//ENG:The address entity is imported to establish relationship. 
import {Project} from "./project.model";//ENG:The project entity is imported to establish relationship. 

@Entity()// ENG:Necessary decorator for entities with typeorm 
export class Trust {

    @PrimaryGeneratedColumn()// ENG: Decorator to declare PK primary keys 
    id: number;

    @Column("varchar")
    name: string;

    @Column("varchar")
    webPage: string;

    @CreateDateColumn()//Special column that is automatically set to the entity's insertion time. You don't need to write a value into this column - it will be automatically set.
    createAt:number ;

    @Column("varchar")
    email:string;

    @DeleteDateColumn()//Special column that is automatically set to the entity's delete time each time you call soft-delete of entity manager or repository. You don't need to set this column - it will be automatically set.
    deletedAt:number ;

    @Column ("varchar",{nullable: true})
    deletedBy:number;

    @Column ("varchar",{nullable: true})
    createdBy:number;

    @OneToOne(() => Address)// ENG:Necessary decorator to declare One-to-one relationship with the address entity.
    @JoinColumn()// ENG:The decorator is required for the one-to-one relationship and is added only on one side of the relationship, in this case the heir. 
    address: Address;

    @OneToMany(() => Project, project => project.trust)//ENG: needed to establish a one-to-many relationship
    project: Project[];

   

   
}