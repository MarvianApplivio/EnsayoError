
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

    public static getAddressModel(state: string, firstLline: string,
        secondLline: string, zipCode:number, country: Country = null): Address {
        
            const address = new Address;

            address.state = state;
            address.firstLline = firstLline;
            address.secondLline = secondLline;
            address.zipCode = zipCode;
            address.country = country

        return address;
    }

    public static getTrustModel(): Trust {
        return new Trust();
    }

    public static getProjectModel(): Project {
        return new Project();
    }
    
    public static getNursing_homeModel(legalName: string, comercialName: string, 
        webPage: string, email: string, npi: number, address: Address = null, 
        project: Project = null): Nursing_home {

        const nursing_home = new Nursing_home;
        nursing_home.legalName = legalName; 
        nursing_home.comercialName = comercialName ; 
        nursing_home.webPage = webPage; 
        nursing_home.email = email; 
        nursing_home.npi = npi;
        nursing_home.address = address;
        nursing_home.project = project;

        return nursing_home;
    }
    
    public static getClinicModel(legalName: string, comercialName: string, 
        webPage: string, email: string, npi: number, address: Address = null, 
        project: Project = null): Clinic {

        const clinic = new Clinic;

        clinic.legalName = legalName;
        clinic.comercialName = comercialName;
        clinic.webPage = webPage; 
        clinic.email = email; 
        clinic.npi = npi;
        clinic.address = address;
        clinic.project = project;

        return clinic;
    }

    public static getNursing_home_clinicModel(): Nursing_home_clinic {
        return new Nursing_home_clinic();
    }

    public static getPhoneModel(is_mobile: boolean, number: string, 
        extension: string = null, nursing_home: Nursing_home = null, clinic: Clinic = null,
        project: Project = null, trust: Trust = null) : Phone {

        const phone = new Phone();
        phone.extension = extension;
        phone.is_mobile = is_mobile;
        phone.number = number;
        phone.nursing_home = nursing_home;
        phone.project = project;
        phone.clinic = clinic;
        phone.trust = trust;

        return phone;
    }

    public static getAction_logsModel(): Action_logs {
        return new Action_logs();
    }

}