import { Project } from "../../models/project.model"; 
import { ProjectRepository } from "../../repository/project.repository";
import { BaseBo } from "./abstractBase.bo";

export class ProjectBo extends BaseBo<ProjectRepository> {//declare a class that uses the repository


    constructor() {
        super(ProjectRepository);// the repository is called inside the constructor function
    
    }

    public async getListProject(): Promise<Project> {// the entity information is obtained in a function
        return await this.repository.findById(1)
        
    }

}