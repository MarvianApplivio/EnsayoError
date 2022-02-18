import { Project } from "../../models/project.model"; 
import { ProjectRepository } from "../../repository/project.repository";
import { BaseBo } from "./abstractBase.bo";

<<<<<<< HEAD
export class ProjectBo extends BaseBo<ProjectRepository> {//declare a class that uses the repository


    constructor() {
        super(ProjectRepository);// the repository is called inside the constructor function
    
    }

    public async getListProject(): Promise<Project> {// the entity information is obtained in a function
=======
export class ProjectBo extends BaseBo<ProjectRepository> {

    constructor() {
        super(ProjectRepository);
    
    }

    public async getListProject(): Promise<Project> {
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
        return await this.repository.findById(1)
        
    }

}