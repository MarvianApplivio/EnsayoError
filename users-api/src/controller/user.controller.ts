import { Request, Response } from "express"
import { checkSchema, validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";
import { BoFactory } from "../bussines/bo/factory/bo.factory"
import { Utils } from "../utils/utils"
import { createDoctorValidatorSchema, createNurseValidatorSchema, createSecretaryValidatorSchema } from "../validators/user.validator";


export class UserController {

    /**
     * 
     * @param _req 
     * @param res 
     */
    public static async createUser(req: Request, res: Response) {
        try {
            
            const params = req.body;
            const schemaErrors = [];
            let validations = undefined;
            let errors = validationResult(req);
            if (!errors.isEmpty()) {
                return Utils.response(res, StatusCodes.FORBIDDEN, "Invalid request", [{ errors: errors.array() }]);
            }

            // DOCTOR
            if (params.user_type === 1) {
                validations = await checkSchema(createDoctorValidatorSchema).run(req);
             }
             // SECRETARY
             else if (params.user_type === 2) {
                validations = await checkSchema(createSecretaryValidatorSchema).run(req);
             }
             // NURSE
             else if (params.user_type === 3) {
                validations = await checkSchema(createNurseValidatorSchema).run(req);
             }
             // PATIENT
             else if (params.user_type === 4) {
                //validations = await checkSchema(createUserValidatorSchema).run(req);
             }

             validations.forEach(element => {
                if (!element.isEmpty())
                    schemaErrors.push(element.array()[0])
            });

            if (schemaErrors.length) {
                return Utils.response(res, StatusCodes.FORBIDDEN, "Invalid request", [{ errors: schemaErrors }]);
            } 


            let userBo = BoFactory.getUserBo();
            let id = await userBo.createUser(params);
            return Utils.response(res, StatusCodes.CREATED, "Request Succesfull", [{ user_id: id }])
        } catch (error) {
            return Utils.response(res, StatusCodes.INTERNAL_SERVER_ERROR, "Occur an error triying to save the new user")

        }
        
    }


    public static async loginUser(req: Request, res: Response) {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return Utils.response(res, StatusCodes.FORBIDDEN, "Invalid request", [{ errors: errors.array() }]);
        }
        let userBo = BoFactory.getUserBo();
        let tokens = await userBo.login(req.body);
        return Utils.response(res, StatusCodes.OK, "Request Succesfull", [tokens])
    }

    public static async firstLogin(req: Request, res: Response) {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return Utils.response(res, StatusCodes.FORBIDDEN, "Invalid request", [{ errors: errors.array() }]);
        }
        let userBo = BoFactory.getUserBo();
        let result = await userBo.firstLogin(req.body);
        return Utils.response(res, StatusCodes.OK, "Request Succesfull", [result])
    }
}

