import { ProfileRepository } from "../../repository/profile.repository";
import { BaseBo } from "./abstractBase.bo";

export class ProfileBo extends BaseBo<ProfileRepository> {

    constructor() {
        super(ProfileRepository)
    }

}