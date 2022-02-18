import { Nursing_home_clinic } from "../../models/nursing_home_clinic.model";
import { Nursing_home_clinicRepository } from "../../repository/nursing_home_clinic.repository";
import { BaseBo } from "./abstractBase.bo";

export class Nursing_home_clinicBo extends BaseBo<Nursing_home_clinicRepository> {

    constructor() {
        super(Nursing_home_clinicRepository);
    
    }

    public async getListNursingHomeClinic(): Promise<Nursing_home_clinic> {
        return await this.repository.findById(1)
        
    }

}