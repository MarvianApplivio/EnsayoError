import { VaccineRepository } from "../../repository/vaccine.repository";
import { BaseBo } from "./abstractBase.bo";

export class VaccineBo extends BaseBo<VaccineRepository> {

    constructor() {
        super(VaccineRepository)
    }

}