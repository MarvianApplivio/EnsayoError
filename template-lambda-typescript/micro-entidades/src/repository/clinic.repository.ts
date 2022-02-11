

import {EntityRepository, Repository} from "typeorm";
import { Clinic } from "../models/clinic.model"; 

@EntityRepository(Clinic)
export class ClinicRepository extends Repository<Clinic> {
     

    
    public findById(id: number) {
        return this.findOne({ id });    
          
    }   

   }
    
 
    


