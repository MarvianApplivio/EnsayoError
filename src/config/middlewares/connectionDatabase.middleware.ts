import "reflect-metadata";
import {Request, Response } from "express";
import { createConnection } from "typeorm";
import { Role } from "../../models/role.model";
import { Status } from "../../models/status.model";
import { ErrorFactory } from "../../utils/errors/factory/errorFactory.factory";
import { StatusCodes } from "http-status-codes";

export function middleware(_req: Request, _res: Response, next: Function) {
    createConnection({
        type: "postgres",
        host: "127.0.0.1",
        port: 5432,
        username: "postgres",
        password: "admin",
        database: "test",
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