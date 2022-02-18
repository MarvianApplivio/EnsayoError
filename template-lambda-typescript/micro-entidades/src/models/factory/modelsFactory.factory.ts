
import { Country } from "../country.model";
import { Address } from "../address.model";
import { Trust } from "../trust.model";
import { Project } from "../project.model";
import { Nursing_home } from "../nursing_home.model";
import { Clinic } from "../clinic.model";
import { Nursing_home_clinic } from "../nursing_home_clinic.model";
import { Phone } from "../phone.model";
import { Action_logs } from "../action_logs.model";
export class ModelFactory {

  

    public static getCountryModel(): Country {// a static function is created that obtains the information of the entity and returns the updated entity
        return new Country();
    }

    public static getAddressModel(): Address {
        return new Address();
    }

    public static getTrustModel(): Trust {
        return new Trust();
    }

    public static getProjectModel(): Project {
        return new Project();
    }
    
    public static getNursing_homeModel(): Nursing_home {
        return new Nursing_home();
    }
    
    public static getClinicModel(): Clinic {
        return new Clinic();
    }

    public static getNursing_home_clinicModel(): Nursing_home_clinic {
        return new Nursing_home_clinic();
    }

    public static getPhoneModel(): Phone {
        return new Phone();
    }

    public static getAction_logsModel(): Action_logs {
        return new Action_logs();
    }

}