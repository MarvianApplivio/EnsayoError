import { Action_logs } from "../../models/action_logs.model";
import { Action_logsRepository } from "../../repository/action_logs.repository";
import { BaseBo } from "./abstractBase.bo";

<<<<<<< HEAD
export class Action_logsBo extends BaseBo<Action_logsRepository> {//declare a class that uses the repository

    constructor() {
        super(Action_logsRepository);// the repository is called inside the constructor function
    
    }

    public async getListActionLogs(): Promise<Action_logs> { // the entity information is obtained in a function
        return await this.repository.findById(1)    
=======
export class Action_logsBo extends BaseBo<Action_logsRepository> {

    constructor() {
        super(Action_logsRepository);
    
    }

    public async getListActionLogs(): Promise<Action_logs> {
        return await this.repository.findById(1)
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
        
    }

}