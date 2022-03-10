export const Constants = {

    USER_TYPE_DOCTOR: 1,
    USER_TYPE_SECRETARY: 2,
    USER_TYPE_NURSE: 3,
    USER_TYPE_PATIENT: 4,
    USER_TYPE_ADMIN: 5,

    COGNITO_USER_GROUP_ADMIN: "Admin",
    COGNITO_USER_GROUP_DOCTOR: "Doctor",
    COGNITO_USER_GROUP_SECRETARY: "Nurse",
    COGNITO_USER_GROUP_NURSE: "Secretary",

    STATUS_ENABLE: 1,
    STATUS_WAITING_FIRST_LOGIN: 2,
    STATUS_DISABLE: 3,

    STATUS_PRIORITY_HIGH: 1,
    STATUS_PRIORITY_MEDIUM: 2,
    STATUS_PRIORITY_LOW: 3,

    STATUS_CONFIRMED: 4,
    STATUS_CANCELLED: 5,
    STATUS_PENDING: 6,
    STATUS_RESCHEDULED: 7,
    STATUS_COMPLETED: 8 
}