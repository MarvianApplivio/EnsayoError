import { Role } from "../../models/role.model";
import { RoleRepository } from "../../repository/role.repository";
import { BaseBo } from "./abstractBase.bo";

export class RolesBo extends BaseBo<RoleRepository> {

    constructor() {
        super(RoleRepository);
    
    }

    public async getListRoles(): Promise<Role> {
        return await this.repository.findById(1)
        
    }

}