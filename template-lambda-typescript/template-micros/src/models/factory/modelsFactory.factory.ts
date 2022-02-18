import { Role } from "../role.model";
import { Status } from "../status.model";

export class ModelFactory {

    public static getRoleModel(): Role {
        return new Role();
    }

    public static getStatusModel(): Status {
        return new Status();
    }



}