import { Status } from "../../models/status.model";
import { StatusRepository } from "../../repository/status.repository";
import { BaseBo } from "./abstractBase.bo";

export class StatusBo extends BaseBo<StatusRepository> {

    constructor() {
        super(StatusRepository)
    }


    /**
     * 
     * @param id number
     * @returns 
     */
    public async getStatusById(id: number): Promise<Status> {
        return await this.repository.findById(id);
    }

}