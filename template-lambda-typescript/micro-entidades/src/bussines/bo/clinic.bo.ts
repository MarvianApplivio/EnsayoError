import { Clinic } from "../../models/clinic.model"; 
import { ClinicRepository } from "../../repository/clinic.repository";
import { BaseBo } from "./abstractBase.bo";
import {  getRepository} from "typeorm";
import { Request, Response } from "express";

export class ClinicBo extends BaseBo<ClinicRepository> {

    constructor() {
        super(ClinicRepository);
    
        
    }

    public async getListClinic(): Promise<Clinic> {
        return await this.repository.findById(1)
        
    } 
   
     public async getClinic(): Promise<Clinic>{
        return await this.repository.findById(1);
     }
        

     
    createClinic = async (req:Request, res: Response):Promise<Response> =>{
      const newClinic = this.repository.create(req.body);
    const result= await this.repository.save(newClinic);
    return await res.json(result);
    }

}
