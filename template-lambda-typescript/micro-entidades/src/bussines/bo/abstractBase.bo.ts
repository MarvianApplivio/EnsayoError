<<<<<<< HEAD
import { getCustomRepository, Repository } from "typeorm";

export abstract class BaseBo<T> {
    
    protected repository: T

    constructor(classRepository: CallableFunction) {
        this.repository = getCustomRepository(classRepository)
    }
=======
import { getCustomRepository, Repository } from "typeorm";

export abstract class BaseBo<T> {
    
    protected repository: T

    constructor(classRepository: CallableFunction) {
        this.repository = getCustomRepository(classRepository)
    }
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
}