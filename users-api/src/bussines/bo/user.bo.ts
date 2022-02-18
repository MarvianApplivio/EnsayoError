import { UserRepository } from "../../repository/user.repository";
import { BaseBo } from "./abstractBase.bo";
import { ModelFactory } from "../../models/factory/modelsFactory.factory"
import { BoFactory } from "./factory/bo.factory";
import { User } from "../../models/user.model";
import { CognitoUtils } from "../../utils/cognito";

export class UserBo extends BaseBo<UserRepository> {

    constructor() {
        super(UserRepository)
    }

    public async createUser(params: any): Promise<number> {
            // if not patient
            let user: User = null;
            if (params.userType != 4  ) {
                await CognitoUtils.createUser(params.email);
                //TODO add validations
            }

            if (params.type == 1) {
                user = await this.registerDoctor(params);
            } else if (params.userType == 2) {
                user = await this.registerSecretary(params);
            } else if (params.userType == 3) {
                user = await this.registerNurse(params);
            } else {
                user = await this.registerPatient(params);
            }

            return user.id;

    }


    public async login(params: any) {

        //TODO validations
        return await CognitoUtils.getTokens(params.email, params.password);

    }

    public async firstLogin(params: any) {

        //TODO validations
        return await CognitoUtils.challengeFirstLogin(params.email, params.newPassword, params.session);
    }

    private async registerDoctor(params: any): Promise<User> {
        const statusBo = BoFactory.getStatusBo();
        const status = await statusBo.getStatusById(1);
        let user = ModelFactory.getUserModel(params.firstname, params.surname, params.email, status, params.middlename, params.second_surname);
        await this.repository.save(user);
        //TODO add profile data
        return user;

    }

    private async registerSecretary(params: any): Promise<User> {
        const statusBo = BoFactory.getStatusBo();
        const status = await statusBo.getStatusById(1);
        let user = ModelFactory.getUserModel(params.firstname, params.surname, params.email, status, params.middlename, params.second_surname);
        await this.repository.save(user);
        //TODO add profile data
        return user;

    }

    private async registerNurse(params: any): Promise<User> {
        const statusBo = BoFactory.getStatusBo();
        const status = await statusBo.getStatusById(1);
        let user = ModelFactory.getUserModel(params.firstname, params.surname, params.email, status, params.middlename, params.second_surname);
        await this.repository.save(user);
        //TODO add profile data
        return user;

    }

    private async registerPatient(params: any): Promise<User> {
        //Logic for register patient
        return new User(); //Dont do this(Instanciate class directly here, this just for compile)
    }   

}