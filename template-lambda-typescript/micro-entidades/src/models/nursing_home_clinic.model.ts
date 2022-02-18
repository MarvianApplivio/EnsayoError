import { Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm";
import { Nursing_home } from "./nursing_home.model";
import { Clinic } from "./clinic.model";

@Entity()
export class Nursing_home_clinic {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Nursing_home)
    @JoinColumn()
    nursing_home: Nursing_home;

    @OneToOne(() => Clinic)
    @JoinColumn()
    clinic: Clinic;
}
