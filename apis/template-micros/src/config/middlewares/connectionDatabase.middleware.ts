import "reflect-metadata";
import { Request, Response } from "express";
import { Connection, createConnection, getConnection } from "typeorm";
import { Role } from "../../models/role.model";
import { Status } from "../../models/status.model";
import { ErrorFactory } from "../../utils/errors/factory/errorFactory.factory";
import { StatusCodes } from "http-status-codes";
import { env } from "process";

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
          Role,
          Status
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