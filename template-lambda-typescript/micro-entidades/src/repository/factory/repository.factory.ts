
import { Action_logsRepository } from "../action_logs.repository";
import { AddressRepository } from "../address.repository";
import { ClinicRepository } from "../clinic.repository";
import { CountryRepository } from "../country.repository";
import { Nursing_homeRepository } from "../nursing_home.repository";
import { Nursing_home_clinicRepository } from "../nursing_home_clinic.repository";
import { PhoneRepository } from "../phone.repository";
import { ProjectRepository } from "../project.repository";
import { RoleRepository } from "../role.repository";
import { StatusRepository } from "../status.repository";
import { TrustRepository } from "../trust.repository";

export class RepositoryFactory {

    /**
     * 
     * @returns RoleRepository
     */
    public static getRoleRepository(): RoleRepository {
        return new RoleRepository;
    }

    /**
     * 
     * @returns StatusRepository
     */
    public static getStatusRepository(): StatusRepository {
        return new StatusRepository();
    }

    /**
     * 
     * @returns CountryRepository
     */
     public static getCountryRepository(): CountryRepository {
        return new CountryRepository();
    }

    /**
     * 
     * @returns AddressRepository
     */
     public static getAddressRepository(): AddressRepository {
        return new AddressRepository();
    }

    /**
     * 
     * @returns TrustRepository
     */
     public static getTrustRepository(): TrustRepository {
        return new TrustRepository();
    }

    /**
     * 
     * @returns ProjectRepository
     */
     public static getProjectRepository(): ProjectRepository {
        return new ProjectRepository();
    }

    /**
     * 
     * @returns Nursing_homeRepository
     */
     public static getNursingHomeRepository(): Nursing_homeRepository {
        return new Nursing_homeRepository();
    }

    /**
     * 
     * @returns ClinicRepository
     */
     public static getClinicRepository(): ClinicRepository {
        return new ClinicRepository();
    }

    /**
     * 
     * @returns Nursing_home_clinicRepository
     */
     public static getNursingHomeClinicRepository(): Nursing_home_clinicRepository {
        return new Nursing_home_clinicRepository();
    }

    /**
     * 
     * @returns PhoneRepository
     */
     public static getPhoneRepository(): PhoneRepository{
        return new PhoneRepository();
    }

    /**
     * 
     * @returns Action_logsRepository
     */
     public static getActionLogsRepository(): Action_logsRepository{
        return new Action_logsRepository();
    }
}