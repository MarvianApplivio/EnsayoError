import { Request, Response } from "express";

export function middleware(req: Request, _res: Response, next: Function) {
    
    req.requestTime = new Date();
    next()
}