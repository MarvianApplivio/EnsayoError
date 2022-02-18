import "reflect-metadata";
import { Request, Response } from "express";
import { Connection, createConnection, getConnection } from "typeorm";
import { User } from "../../models/user.model";
import { Status } from "../../models/status.model";
import { ErrorFactory } from "../../utils/errors/factory/errorFactory.factory";
import { StatusCodes } from "http-status-codes";
import { env } from "process";
import { Vaccine } from "../../models/vaccine.model";
import { Phone } from "../../models/phone.model";
import { Profile } from "../../models/profile.model";
import { UserEntity } from "../../models/userEntity.model";
import { UserType } from "../../models/userType.model";

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
          User,
          Status, 
          Vaccine,
          Phone,
          Profile,
          UserEntity,
          UserType        ],
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