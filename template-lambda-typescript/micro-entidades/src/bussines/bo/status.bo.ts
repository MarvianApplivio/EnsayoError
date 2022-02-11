import { StatusRepository } from "../../repository/status.repository";
import { BaseBo } from "./abstractBase.bo";
import { Status } from "../../models/status.model";
export class StatusBo extends BaseBo<StatusRepository> {

    constructor() {
        super(StatusRepository);
    
    }

    public async getListStatus(): Promise<Status> {
        return await this.repository.findById(1)
        
    }
    }


