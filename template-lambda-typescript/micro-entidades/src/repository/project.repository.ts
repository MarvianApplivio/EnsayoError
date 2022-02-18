import {EntityRepository, Repository} from "typeorm";
import { Project } from "../models/project.model";

@EntityRepository(Project)
export class ProjectRepository extends Repository<Project> {
//create a function for the repository entity and return an id
    public findById(id: number) {
        return this.findOne({ id });
    }

}