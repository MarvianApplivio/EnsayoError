import { Schema } from "express-validator";


export const createEventValidatorSchema: Schema = {
    expectedDuration: {
        in: ["body"],
        isInt: true,
        optional: true,
        errorMessage: "expectedDuration must be int"

    },
    beginAt: {
        in: ["body"],
        isDate: true,
        notEmpty: true,
        errorMessage: "beginAt must be Date and is required"
    },
    endAt: {
        in: ["body"],
        isDate: true,
        optional: true,
        errorMessage: "surname must be Date"
    },
    description: {
        in: ["body"],
        isString: true,
        optional: true,
        errorMessage: "description must be string"
    },
    orderAttention: {
        in: ["body"],
        isInt: true,
        notEmpty: true,
        errorMessage: "orderAttention must be int"
    },
    address: {
        in: ["body"],
        isString: true,
        optional: true,
        errorMessage: "address must be String"
    },
    chiefComplaint: {
        in: ["body"],
        isString: true,
        optional: true,
        errorMessage: "chiefComplaint must be string"
    },
    tytocareId: {
        in: ["body"],
        isString: true,
        notEmpty: true,
        errorMessage: "tytocareId must be string with format and is required"
    },
    insuranceCarrier: {
        in: ["body"],
        isString: true,
        optional: true,
        errorMessage: "insuranceCarrier must be string"
    },
    doctorUserEntity_id: {
        in: ["body"],
        isInt: true,
        notEmpty: true,
        errorMessage: "doctorUserEntity must be int and is required"
    },
    statusPriority_id: {
        in: ["body"],
        isInt: true,
        notEmpty: true,
        errorMessage: "statusPriorityId must be int and is required"
    },
    statusAssistanceType_id: {
        in: ["body"],
        isInt: true,
        notEmpty: true,
        errorMessage: "statusAssistanceType_id must be int and is required"
    },
    patientUserEntity_id: {
        in: ["body"],
        isInt: true,
        notEmpty: true,
        errorMessage: "statusPriorityId must be int and is required"
    },
    statusStatus_id: {
        in: ["body"],
        isInt: true,
        notEmpty: true,
        errorMessage: "statusStatus_id must be int and is required"
    },
    nurseUserEntity_id: {
        in: ["body"],
        isInt: true,
        notEmpty: true,
        errorMessage: "nurseUserEntity_id must be int and is required"
    },
    event_id: {
        in: ["body"],
        isInt: true,
        optional: true,
        errorMessage: "event_id must be int and is required"
    }

}

export const getEventValidatorSchema: Schema = {
    doctorUserEntity_id: {
        in: ["body"],
        isInt: true,
        optional: true,
        errorMessage: "doctorUserEntity must be int"
    },

    nurseUserEntity_id: {
        in: ["body"],
        isInt: true,
        notEmpty: true,
        errorMessage: "nurseUserEntity_id must be int and is required"
    },
    
    patientUserEntity_id: {
        in: ["body"],
        isInt: true,
        optional: true,
        errorMessage: "statusPriorityId must be int"
    }
}
