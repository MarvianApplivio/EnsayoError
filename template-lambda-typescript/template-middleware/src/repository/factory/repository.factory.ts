import { RoleRepository } from "../role.repository";
import { StatusRepository } from "../status.repository";

export class RepositoryFactory {

    /**
     * 
     * @returns RoleRepository
     */
    public static getRoleRepository(): RoleRepository {
        return new RoleRepository;
    }

    /**
     * 
     * @returns StatusRepository
     */
    public static getStatusRepository(): StatusRepository {
        return new StatusRepository();
    }

}