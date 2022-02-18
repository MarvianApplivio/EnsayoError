import { UserEntityRepository } from "../../repository/userEntity.repository";
import { BaseBo } from "./abstractBase.bo";

export class UserEntityBo extends BaseBo<UserEntityRepository> {

    constructor() {
        super(UserEntityRepository)
    }

}