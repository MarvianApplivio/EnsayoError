
import { Trust } from "../../models/trust.model";
import { TrustRepository } from "../../repository/trust.repository"; 
import { BaseBo } from "./abstractBase.bo";

export class TrustBo extends BaseBo<TrustRepository> {

    constructor() {
        super(TrustRepository);
    
    }

    public async getListTrust(): Promise<Trust> {
        return await this.repository.findById(1)
        
    }

}