import { EventoBo } from "../event.bo";
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

     /**
     * 
     * @returns EventBo
     */
      public static getEventBo(): EventoBo {
        return new EventoBo();
    }
}