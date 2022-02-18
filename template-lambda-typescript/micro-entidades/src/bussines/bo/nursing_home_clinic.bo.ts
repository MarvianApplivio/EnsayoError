import { Nursing_home_clinic } from "../../models/nursing_home_clinic.model";
import { Nursing_home_clinicRepository } from "../../repository/nursing_home_clinic.repository";
import { BaseBo } from "./abstractBase.bo";

export class Nursing_home_clinicBo extends BaseBo<Nursing_home_clinicRepository> {//declare a class that uses the repository


    constructor() {
        super(Nursing_home_clinicRepository);// the repository is called inside the constructor function
    
    }

    public async getListNursingHomeClinic(): Promise<Nursing_home_clinic> {// the entity information is obtained in a function
        return await this.repository.findById(1)
        
    }

}