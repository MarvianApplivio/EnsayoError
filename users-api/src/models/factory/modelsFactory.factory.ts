import { Phone } from "../phone.model";
import { Profile } from "../profile.model";
import { Status } from "../status.model";
import { User } from "../user.model";
import { UserEntity } from "../userEntity.model";
import { UserType } from "../userType.model";
import { Vaccine } from "../vaccine.model";

export class ModelFactory {

    public static getStatusModel(): Status {
        return new Status();
    }

    /**
     * 
     * @param firstname 
     * @param surname 
     * @param email 
     * @param status 
     * @param middlename 
     * @param second_surname 
     * @returns 
     */
    public static getUserModel(firstname: string, surname: string, email: string,  status: Status,  middlename: string = null, second_surname: string = null): User {
        const user =  new User();
        user.firstname = firstname;
        user.middlename = middlename;
        user.surname = surname;
        user.second_surname = second_surname;
        user.email = email;
        user.status = status;

        return user;
    }

    /**
     * 
     * @returns Vaccine
     */
    public static getVaccineModel(): Vaccine {
        return new Vaccine();
    }

    /**
     * 
     * @returns Phone
     */
    public static getPhoneModel(): Phone {
        return new Phone();
    }

    /**
     * 
     * @returns Profile
     */
    public static getProfileModel(): Profile {
        return new Profile();
    }

    /**
     * 
     * @returns UserEntity
     */
    public static getUserEntityModel(): UserEntity {
        return new UserEntity();
    }

    /**
     * 
     * @returns UserType
     */
    public static getUserTypeModel(): UserType {
        return new UserType();
    }



}