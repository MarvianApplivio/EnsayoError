import { Nursing_home } from "../../models/nursing_home.model";
import { Nursing_homeRepository } from "../../repository/nursing_home.repository";
import { BaseBo } from "./abstractBase.bo";

export class Nursing_homeBo extends BaseBo<Nursing_homeRepository> {

    constructor() {
        super(Nursing_homeRepository);
    
    }

    public async getListNursingHome(): Promise<Nursing_home> {
        return await this.repository.findById(1)
        
    }

}