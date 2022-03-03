import { Event } from "../../models/event.model";
import { EventRepository } from "../../repository/event.repository";
import { BaseBo } from "./abstractBase.bo";
import { BoFactory } from "./factory/bo.factory";
import { Constants } from "../../utils/contants";
import { EntityManager } from "typeorm";
import { ModelFactory } from "../../models/factory/modelsFactory.factory";

export class EventoBo extends BaseBo<EventRepository> {

    constructor() {
        super(EventRepository);
    
    }

    public async getListEvent(): Promise<Event> {
        return await this.repository.findById(1)
        
    }

    /**
     * function to create an event
     * @param params 
     * @returns Promise<Event>
     */
    public async createEvent(params: any): Promise<Event> {

        let event : Event = null;

        const queryRunner = this.manager.connection.createQueryRunner();

        await queryRunner.connect();

        await queryRunner.startTransaction();

            try {

                event = await this.createDate(params, queryRunner.manager);

            }

            catch(error) {
                queryRunner.rollbackTransaction();
                throw error;
            }
            
        queryRunner.commitTransaction();

        return event;
        
    }

     /**
     * function to create an event
     * @param params 
     * @returns Promise<Event>
     */
    public async createDate(params: any, manager: EntityManager = null): Promise<Event> {

            const statusBo = BoFactory.getStatusBo();
            const statusStatus = await statusBo.getStatusById(Constants.STATUS_PENDING);
            let event = ModelFactory.getEventModel(params.expectedDuration, params.beginAt, params.endAt, params.description, params.orderAttention, params.address, params.chiefComplaint, params.tytocareId, params.insuranceCarrier, params.doctorUserEntity, params.statusPriorityId, params.statusAssistanceTypeId, params.patientUserEntityId, statusStatus, params.nurseUserEntityId )

            if (manager) {
                //transaction
                await manager.save(event);
            } else {
                await this.saveEntities(Event);
            }


        return event;
        
    }

}