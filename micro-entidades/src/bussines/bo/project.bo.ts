import { Project } from "../../models/project.model"; 
import { ProjectRepository } from "../../repository/project.repository";
import { BaseBo } from "./abstractBase.bo";

export class ProjectBo extends BaseBo<ProjectRepository> {

    constructor() {
        super(ProjectRepository);
    
    }

    public async getListProject(): Promise<Project> {
        return await this.repository.findById(1)
        
    }

}