import { RoleRepository } from "../role.repository";
import { StatusRepository } from "../status.repository";
import { ActionLogsRepository } from "../actionLogs.repository";
import { CalendarRepository } from "../calendar.repository";
import { DaysCalendarRepository } from "../daysCalendar.repository";
import { EventRepository } from "../event.repository";

export class RepositoryFactory {

    /**
     * 
     * @returns RoleRepository
     */
    public static getRoleRepository(): RoleRepository {
        return new RoleRepository;
    }

    /**
     * 
     * @returns StatusRepository
     */
    public static getStatusRepository(): StatusRepository {
        return new StatusRepository();
    }

     /**
     * 
     * @returns ActionLogsRepository
     */
      public static getActionLogsRepository(): ActionLogsRepository {
        return new ActionLogsRepository();
    }

    /**
     * 
     * @returns CalendarRepository
     */
     public static getCalendarRepository(): CalendarRepository {
        return new CalendarRepository();
    }

    /**
     * 
     * @returns DaysCalendarRepository
     */
     public static getDayCalendarRepository(): DaysCalendarRepository {
        return new DaysCalendarRepository();
    }

    /**
     * 
     * @returns EventRepository
     */
     public static getEventRepository(): EventRepository {
        return new EventRepository();
    }

}