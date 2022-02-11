import {EntityRepository, Repository} from "typeorm";
import { Project } from "../models/project.model";

@EntityRepository(Project)
export class ProjectRepository extends Repository<Project> {

    public findById(id: number) {
        return this.findOne({ id });
    }

}