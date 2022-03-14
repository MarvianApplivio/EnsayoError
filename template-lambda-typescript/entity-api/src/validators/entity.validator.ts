import { Schema } from "express-validator";


export const createEntityValidatorSchema: Schema = {
    legalName: {
        in: ["body"],
        isString: true,
        optional: true,
        errorMessage: "legal_name must be string"

    },
    comercialName: {
        in: ["body"],
        isString: true,
        optional: true,
        errorMessage: "comercial_name must be string"
    },
    npi: {
        in: ["body"],
        isString: true,
        notEmpty: true,
        custom: {
            options: (value) => {
                const regexPattern = /^\d{10}$/g;
                if (!regexPattern.test(value)) {
                    throw Error("npi is required and must be have only numbers");
                }
                return true;
            }
        },
    },
    webPage: {
        in: ["body"],
        isString: true,
        optional: true,
        errorMessage: "web_page must be string"
    },
    email: {
        in: ["body"],
        isEmail: true,
        notEmpty: true,
        errorMessage: "email must be string and is required"
    },
}
