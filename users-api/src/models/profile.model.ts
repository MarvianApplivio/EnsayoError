import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Status } from "./status.model";
import { User } from "./user.model";

@Entity()
export class Profile {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", {nullable: true, default: null})
    legalIdentifier: string;

    @Column("varchar", {nullable: true, default: null})
    specialty: string;

    @Column("date", {nullable: false})
    birthday: Date;

    @Column("varchar", {nullable: true, default: null})
    medicalPlan: string;

    @Column("varchar", {nullable: true, default: null})
    clinicalMedicalRecord: string;

    @Column("varchar", {nullable: true, default: null})
    clinicalMedicalNH: string;

    @Column("varchar", {nullable: true, default: null})
    photoURL: string;

    @Column("varchar", {nullable: true, default: null})
    insuranceCardURL: string;

    @Column("varchar", {nullable: true, default: null})
    driverLicecseURL: string;

    @Column("varchar", {nullable: true, default: null})
    socialSecurityCardURL: string;

    @Column("varchar", {nullable: true, default: null})
    insuranceCarrier: string;

    @Column("varchar", {nullable: true, default: null})
    genericPatientId: string

    @Column("varchar", {nullable: true, default: null})
    tytocareId: string;

    @Column("boolean", { default: true})
    isAlive: boolean;

    @Column("int", {nullable: true, default: null})
    zipCode: number;

    @Column("varchar", {nullable: true, default: null})
    bloodType: string;

    @Column("boolean", {nullable: true, default: null})
    isVaccinated: boolean;

    @ManyToOne( () => Status, { nullable: false} )
    statusGender: Status

    @ManyToOne( () => User, { nullable: false} )
    user: User
    
}