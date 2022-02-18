import { Nursing_home_clinic } from "../../models/nursing_home_clinic.model";
import { Nursing_home_clinicRepository } from "../../repository/nursing_home_clinic.repository";
import { BaseBo } from "./abstractBase.bo";

<<<<<<< HEAD
export class Nursing_home_clinicBo extends BaseBo<Nursing_home_clinicRepository> {//declare a class that uses the repository


    constructor() {
        super(Nursing_home_clinicRepository);// the repository is called inside the constructor function
    
    }

    public async getListNursingHomeClinic(): Promise<Nursing_home_clinic> {// the entity information is obtained in a function
=======
export class Nursing_home_clinicBo extends BaseBo<Nursing_home_clinicRepository> {

    constructor() {
        super(Nursing_home_clinicRepository);
    
    }

    public async getListNursingHomeClinic(): Promise<Nursing_home_clinic> {
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
        return await this.repository.findById(1)
        
    }

}