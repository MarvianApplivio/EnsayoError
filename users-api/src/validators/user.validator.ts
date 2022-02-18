import { Schema } from "express-validator";

export const validUserTypeSchema: Schema = {
    user_type: {
        in: ["body"],
        isInt: true,
        errorMessage: "user_type must be int and is required"
    }
}

export const createDoctorValidatorSchema: Schema = {
    firstname: {
        in: ["body"],
        isString: true,
        errorMessage: "firstname must be string and is required"

    },
    middlename: {
        in: ["body"],
        isString: true,
        errorMessage: "middlename must be string"
    },
    surname: {
        in: ["body"],
        isString: true,
        notEmpty: true,
        errorMessage: "surname must be string and is required"
    },
    second_surname: {
        in: ["body"],
        isString: true,
        errorMessage: "second_surname must be string"
    },
    email: {
        in: ["body"],
        isEmail: true,
        notEmpty: true,
        errorMessage: "email must be string and is required"
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
    specialty: {
        in: ["body"],
        isString: true,
        notEmpty: true,
        errorMessage: "specialty must be string and is required"
    },
    birthday: {
        in: ["body"],
        isString: true,
        notEmpty: true,
        errorMessage: "birthday must be string with format and is required"
    },
    phone: {
        in: ["body"],
        isString: true,
        notEmpty: true,
        errorMessage: "phone must be string and is required"
    },
    gender: {
        in: ["body"],
        isInt: true,
        notEmpty: true,
        errorMessage: "gender must be int and is required"
    },
    clinic_id: {
        in: ["body"],
        isInt: true,
        notEmpty: true,
        errorMessage: "clinic_id must be int and is required"
    }

}

export const createSecretaryValidatorSchema: Schema = {
    firstname: {
        in: ["body"],
        isString: true,
        errorMessage: "firstname must be string and is required"

    },
    middlename: {
        in: ["body"],
        isString: true,
        errorMessage: "middlename must be string"
    },
    surname: {
        in: ["body"],
        isString: true,
        notEmpty: true,
        errorMessage: "surname must be string and is required"
    },
    second_surname: {
        in: ["body"],
        isString: true,
        errorMessage: "second_surname must be string"
    },
    email: {
        in: ["body"],
        isEmail: true,
        notEmpty: true,
        errorMessage: "email must be string and is required"
    },   
    birthday: {
        in: ["body"],
        isString: true,
        notEmpty: true,
        errorMessage: "birthday must be string with format and is required"
    },
    phone: {
        in: ["body"],
        isString: true,
        notEmpty: true,
        errorMessage: "phone must be string and is required"
    },
    gender: {
        in: ["body"],
        isInt: true,
        notEmpty: true,
        errorMessage: "gender must be int and is required"
    },
    clinic_id: {
        in: ["body"],
        isInt: true,
        notEmpty: true,
        errorMessage: "clinic_id must be int and is required"
    }
}

export const createNurseValidatorSchema: Schema = {
    firstname: {
        in: ["body"],
        isString: true,
        errorMessage: "firstname must be string and is required"

    },
    middlename: {
        in: ["body"],
        isString: true,
        errorMessage: "middlename must be string"
    },
    surname: {
        in: ["body"],
        isString: true,
        notEmpty: true,
        errorMessage: "surname must be string and is required"
    },
    second_surname: {
        in: ["body"],
        isString: true,
        errorMessage: "second_surname must be string"
    },
    email: {
        in: ["body"],
        isEmail: true,
        notEmpty: true,
        errorMessage: "email must be string and is required"
    },
    //numero de licencia?
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
    birthday: {
        in: ["body"],
        isString: true,
        notEmpty: true,
        errorMessage: "birthday must be string with format and is required"
    },
    phone: {
        in: ["body"],
        isString: true,
        notEmpty: true,
        errorMessage: "phone must be string and is required"
    },
    gender: {
        in: ["body"],
        isInt: true,
        notEmpty: true,
        errorMessage: "gender must be int and is required"
    },
    clinic_id: {
        in: ["body"],
        isInt: true,
        notEmpty: true,
        errorMessage: "clinic_id must be int and is required"
    }

}

export const loginUserSchema: Schema = {
    email: {
        in: ["body"],
        isEmail: true,
        notEmpty: true,
        errorMessage: "email and password are required"
    },
    password: {
        in: ["body"],
        isString: true,
        notEmpty: true,
        errorMessage: "email and password are required"
    }
}

export const firstLoginSchema: Schema = {
    email: {
        in: ["body"],
        isEmail: true,
        notEmpty: true,
        errorMessage: "email is required"
    },
    new_password: {
        in: ["body"],
        isString: true,
        notEmpty: true,
        errorMessage: "new_password is required"
    },
    session: {
        in: ["body"],
        isString: true,
        notEmpty: true,
        errorMessage: "session is required"
    }
}