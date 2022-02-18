import { RolesBo } from "../roles.bo";
import { StatusBo } from "../status.bo";

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
}