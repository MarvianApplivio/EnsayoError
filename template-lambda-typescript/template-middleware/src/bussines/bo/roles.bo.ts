import { RequestMicros } from "../../lib/request/requestMicros";
import { Role } from "../../models/role.model";
import { RoleRepository } from "../../repository/role.repository";
import { BaseBo } from "./abstractBase.bo";

export class RolesBo /*extends BaseBo<RoleRepository>*/ {

    // constructor() {
    //     super(RoleRepository);
    
    // }

    // public async getListRoles(): Promise<Role> {
    //     return await this.repository.findById(1)
        
    // }

    public async getListRolesMicros(): Promise<any[]> {
        const requestConfig = {
            url: `${process.env.TEMPLATE_MICRO_URL}/roles`,
            method: "get",
        }
        
        const response = await RequestMicros.do(requestConfig);
        let roles = [];
        if (response.code == 200) {
            roles = response.data;
        }

        return roles;
    }

}