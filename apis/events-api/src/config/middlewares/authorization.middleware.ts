import { Request, Response } from "express";
import * as jose from 'jose'
import { ErrorFactory } from "../../utils/errors/factory/errorFactory.factory";

export function  middleware(neededRoles: string[]) {
    return (req: Request, _res: Response, next: Function) => {
        const token = req.headers.authorization;
        const userEntityIdHeader = req.headers.user_entity_id as string;
        const claims = jose.decodeJwt(token.split(" ")[1]);
        const userRoles: string[] = claims["cognito:groups"] as string[];
        const isAllowedRole = neededRoles.some((neededRole) => {
            return userRoles.includes(neededRole)
        });

        const isAllowedUserEntity = (claims["custom:user_entity_id"] as string).split(",").includes(userEntityIdHeader);

        if (!isAllowedRole || !isAllowedUserEntity) {
            next(ErrorFactory.getForbiddenError("User has not permission to access this resource"));
        }
                
        // @ts-ignore
        req.userData = {
            name: claims.name,
            email: claims.email,
            roles: claims["cognito:groups"],
            id: parseInt(claims["custom:id"] as string),
            userEntityId: parseInt(userEntityIdHeader)
        };

        next();

    }
    
}