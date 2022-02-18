import { StatusBo } from "../status.bo";
import { UserBo } from "../user.bo";
import { VaccineBo } from "../vaccine.bo";

export class BoFactory { 

    /**
     * 
     * @returns StatusBo
     */
    public static getStatusBo(): StatusBo {
        return new StatusBo();
    }

    /**
     * 
     * @returns UserBo
     */
    public static getUserBo(): UserBo {
        return new UserBo();
    }

    /**
     * 
     * @returns VaccineBo
     */
    public static getVaccineBo(): VaccineBo {
        return new VaccineBo();
    }

   
}