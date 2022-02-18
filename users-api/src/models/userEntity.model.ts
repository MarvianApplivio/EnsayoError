import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, DeleteDateColumn } from "typeorm";
import { Status } from "./status.model";
import { User } from "./user.model";
import { UserType } from "./userType.model";

@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("int")
    projectId: number;

    @Column("int")
    clinicId: number;

    @Column("int")
    nursingHomeId: number;

    @Column("int")
    trustId: number;

    @CreateDateColumn()
    createdAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @ManyToOne( () => User, { nullable: false} )
    user: User

    @ManyToOne( () => UserType, { nullable: false} )
    userType: User

    @ManyToOne( () => Status, { nullable: false} )
    statusAlert: Status

    @ManyToOne( () => Status, { nullable: false} )
    status: Status

    //TODO add deletedBy and createdBy column

    
}