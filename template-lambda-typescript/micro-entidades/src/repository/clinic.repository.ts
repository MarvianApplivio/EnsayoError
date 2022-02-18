

import {EntityRepository, Repository} from "typeorm";
import { Clinic } from "../models/clinic.model"; 

@EntityRepository(Clinic)
export class ClinicRepository extends Repository<Clinic> {
     //create a function for the repository entity and return an id

    
    public findById(id: number) {
        return this.findOne({ id });    
          
    }   

   }
    
 
    


