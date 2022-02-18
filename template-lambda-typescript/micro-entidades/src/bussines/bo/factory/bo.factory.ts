<<<<<<< HEAD

import { CountryBo } from "../country.bo";
import { AddressBo } from "../address.bo";
import { TrustBo } from "../trust.bo";
import { ProjectBo } from "../project.bo";
import { Nursing_homeBo } from "../nursing_home.bo";
import { ClinicBo } from "../clinic.bo";
import { Nursing_home_clinicBo } from "../nursing_home_clinic.bo";
import { PhoneBo } from "../phone.bo";
import { Action_logsBo } from "../action_logs.bo";

export class BoFactory { 



     /**
     * 
     * @returns CountryBo
     */
      public static getCountryBo(): CountryBo { // create a static class that gets the information in an entity and returns an update to the entity
        return new CountryBo();
    }

    
     /**
     * 
     * @returns AddressBo
     */
      public static getAddressBo(): AddressBo {
        return new AddressBo();
    }

    /**
     * 
     * @returns TrustBo
     */
     public static getTrustBo(): TrustBo {
        return new TrustBo();
    }

    /**
     * 
     * @returns ProjectBo
     */
     public static getProjectBo(): ProjectBo {
        return new ProjectBo();
    }

      /**
     * 
     * @returns Nursing_homeBo
     */
       public static getNursingHomeBo(): Nursing_homeBo {
        return new Nursing_homeBo();
    }

    
      /**
     * 
     * @returns ClinicBo
     */
       public static getClinicBo(): ClinicBo {
        return new ClinicBo();
    }

       /**
     * 
     * @returns Nursing_home_clinicBo
     */
        public static getNursingHomeClinicBo(): Nursing_home_clinicBo {
            return new Nursing_home_clinicBo();
        }

     /**
     * 
     * @returns PhoneBo
     */
    public static getPhoneBo(): PhoneBo {
        return new PhoneBo();
            }

    /**
     * 
     * @returns Action_logsBo
     */
    public static getActionLogsBo(): Action_logsBo {
        return new Action_logsBo();
 }
=======
import { RolesBo } from "../roles.bo";
import { StatusBo } from "../status.bo";
import { CountryBo } from "../country.bo";
import { AddressBo } from "../address.bo";
import { TrustBo } from "../trust.bo";
import { ProjectBo } from "../project.bo";
import { Nursing_homeBo } from "../nursing_home.bo";
import { ClinicBo } from "../clinic.bo";
import { Nursing_home_clinicBo } from "../nursing_home_clinic.bo";
import { PhoneBo } from "../phone.bo";
import { Action_logsBo } from "../action_logs.bo";

export class BoFactory { 

    /**
     * 
     * @returns RolesBo
     */
    public static getRoleBo(): RolesBo {
        return new RolesBo();
    }

    /**
     * 
     * @returns StatusBo
     */
    public static getStatusBo(): StatusBo {
        return new StatusBo();
    }

     /**
     * 
     * @returns CountryBo
     */
      public static getCountryBo(): CountryBo {
        return new CountryBo();
    }

    
     /**
     * 
     * @returns AddressBo
     */
      public static getAddressBo(): AddressBo {
        return new AddressBo();
    }

    /**
     * 
     * @returns TrustBo
     */
     public static getTrustBo(): TrustBo {
        return new TrustBo();
    }

    /**
     * 
     * @returns ProjectBo
     */
     public static getProjectBo(): ProjectBo {
        return new ProjectBo();
    }

      /**
     * 
     * @returns Nursing_homeBo
     */
       public static getNursingHomeBo(): Nursing_homeBo {
        return new Nursing_homeBo();
    }

    
      /**
     * 
     * @returns ClinicBo
     */
       public static getClinicBo(): ClinicBo {
        return new ClinicBo();
    }

       /**
     * 
     * @returns Nursing_home_clinicBo
     */
        public static getNursingHomeClinicBo(): Nursing_home_clinicBo {
            return new Nursing_home_clinicBo();
        }

     /**
     * 
     * @returns PhoneBo
     */
    public static getPhoneBo(): PhoneBo {
        return new PhoneBo();
            }

    /**
     * 
     * @returns Action_logsBo
     */
    public static getActionLogsBo(): Action_logsBo {
        return new Action_logsBo();
 }
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
}