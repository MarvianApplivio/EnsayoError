import {EntityManager, getCustomRepository, getManager,  } from "typeorm";

export abstract class BaseBo<T> {
    
    protected repository: T
    protected manager: EntityManager

    constructor(classRepository: CallableFunction) {

        this.repository = getCustomRepository(classRepository)
        this.manager = getManager()

    }

    /**
     * 
     * @param objects 
     */
     protected async saveEntities(...objects: any[]) {
        for await (let element of objects) {
            await this.manager.save(element);
        }
        
    }
}