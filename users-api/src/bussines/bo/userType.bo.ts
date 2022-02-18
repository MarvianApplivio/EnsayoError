import { UserTypeRepository } from "../../repository/userType.repository";
import { BaseBo } from "./abstractBase.bo";

export class UserTypeBo extends BaseBo<UserTypeRepository> {

    constructor() {
        super(UserTypeRepository)
    }

}