import { PhoneRepository } from "../../repository/phone.repository";
import { BaseBo } from "./abstractBase.bo";

export class PhoneBo extends BaseBo<PhoneRepository> {

    constructor() {
        super(PhoneRepository)
    }

}