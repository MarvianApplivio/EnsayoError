import { Action_logs } from "../../models/action_logs.model";
import { Action_logsRepository } from "../../repository/action_logs.repository";
import { BaseBo } from "./abstractBase.bo";

export class Action_logsBo extends BaseBo<Action_logsRepository> {

    constructor() {
        super(Action_logsRepository);
    
    }

    public async getListActionLogs(): Promise<Action_logs> {
        return await this.repository.findById(1)
        
    }

}