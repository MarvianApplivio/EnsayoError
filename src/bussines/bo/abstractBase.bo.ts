import { getCustomRepository, Repository } from "typeorm";

export abstract class BaseBo<T> {
    
    protected repository: T

    constructor(classRepository: CallableFunction) {
        this.repository = getCustomRepository(classRepository)
    }
}