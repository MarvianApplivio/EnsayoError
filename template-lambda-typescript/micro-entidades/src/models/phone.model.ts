import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm";
import { Project } from "./project.model";
import { Nursing_home } from "./nursing_home.model";
import { Clinic } from "./clinic.model";
 
@Entity()
export class Phone {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    number:number ;

    @Column("varchar")
    extension:number ;

    @Column("varchar")
    is_mobile:number ;

    @OneToOne(() => Nursing_home)
    @JoinColumn()
    nursing_home: Nursing_home;

    @OneToOne(() => Project)
    @JoinColumn()
    project: Project;

    @OneToOne(() => Clinic)
    @JoinColumn()
    clinic: Clinic;
    
}