import "reflect-metadata";
import { Request, Response } from "express";
import { Connection, createConnection, getConnection } from "typeorm";
import { Role } from "../../models/role.model";
import { Status } from "../../models/status.model";
import { ErrorFactory } from "../../utils/errors/factory/errorFactory.factory";
import { StatusCodes } from "http-status-codes";
import { env } from "process";
import { Country } from "../../models/country.model";
import { Address } from "../../models/address.model";
import { Nursing_home } from "../../models/nursing_home.model";
import { Project} from "../../models/project.model";
import { Trust } from "../../models/trust.model";
import { Clinic } from "../../models/clinic.model";
import { Nursing_home_clinic } from "../../models/nursing_home_clinic.model";
import { Phone } from "../../models/phone.model";
import { Action_logs } from "../../models/action_logs.model";

export function middleware(_req: Request, _res: Response, next: Function) {

    try {
      let conn: Connection = getConnection();
      console.log(`Reusing connection ${conn.name}`);
      next();

    } catch (error) {
      createConnection({
        type: "postgres",
        host: env.DATABASE_HOST,
        port: Number(env.DATABASE_PORT),
        username: env.DATABASE_USER,
        password: env.DATABASE_PASSWORD,
        database: env.DATABASE_NAME,
        entities: [
          Country,
          Address,
          Trust,
          Project,
          Nursing_home,
          Clinic,
          Nursing_home_clinic,
          Phone,
          Action_logs
        ],
        synchronize: true,
      })
      .then(() => {
        console.log("Connection succesfull to database");
        next();
      })
      .catch( error => {
          let errorMessage = "Unable to connect to database"
          console.log(`${errorMessage} ${error}`);
          next(ErrorFactory.getErrorDetails(StatusCodes.SERVICE_UNAVAILABLE, errorMessage))
      })
    }
      
}