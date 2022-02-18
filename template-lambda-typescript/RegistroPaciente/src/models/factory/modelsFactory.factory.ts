import { Role } from "../role.model";
import { Status } from "../status.model";
import { Action_logs } from "../action_logs.model";
import { Permission } from "../permission.model";
import { User_type } from "../user_type.model";

export class ModelFactory {

    public static getRoleModel(): Role {
        return new Role();
    }

    public static getStatusModel(): Status {
        return new Status();
    }

    public static getAction_logsModel(): Action_logs {
        return new Action_logs();
    }

    public static getPermissionModel(): Permission {
        return new Permission();
    }
    
    public static getUser_typeModel(): User_type {
        return new User_type();
    }

}