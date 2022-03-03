import { EventSubscriber } from "typeorm";
import { ActionLogs } from "../actionLogs.model";
import { Calendar } from "../calendar.model";
import { DaysCalendar } from "../daysCalendar.model";
import { Event } from "../event.model";
import { Role } from "../role.model";
import { Status } from "../status.model";

export class ModelFactory {

    public static getRoleModel(): Role {
        return new Role();
    }

    /**
     * 
     * @returns Status
     */
    public static getStatusModel(): Status {
        return new Status();
    }

    /**
     * 
     * @returns ActionLogs
     */
    public static getActionLogsModel(): ActionLogs {
        return new ActionLogs();
    }

    /**
     * 
     * @returns Calendar
     */
    public static getCalendarModel(): Calendar {
        return new Calendar();
    }

    /**
     * 
     * @returns DaysCalendar
     */
    public static getDaysCalendarModel(): DaysCalendar {
        return new DaysCalendar();
    }

    /**
     * 
     * @returns Event
     */
    public static getEventModel( expectedDuration: number, beginAt: Date, endAt: Date, 
        description: string , orderAttention: number ,address: string , chiefComplaint: string , 
        tytocareId: string, insuranceCarrier: string, doctorUserEntity: number, 
        statusPriorityId: Status, statusAssistanceTypeId: Status, patientUserEntityId:number ,
        statusStatusId: Status, nurseUserEntityId: number)  : Event{

        const event =  new Event();
        event.expectedDuration = expectedDuration;
        event.beginAt = beginAt;
        event.endAt = endAt;
        event.description = description;
        event.orderAttention = orderAttention;
        event.address = address;
        event.chiefComplaint = chiefComplaint;
        event.tytocareId = tytocareId;
        event.insuranceCarrier = insuranceCarrier;
        event.doctorUserEntity = doctorUserEntity; 
        event.statusPriorityId = statusPriorityId;
        event.statusAssistanceTypeId = statusAssistanceTypeId;
        event.patientUserEntityId = patientUserEntityId;
        event.statusStatusId = statusStatusId;
        event.nurseUserEntityId = nurseUserEntityId;
        
        return event;
    }

}