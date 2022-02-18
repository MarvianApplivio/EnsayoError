<<<<<<< HEAD
import { Request, Response } from "express";

export function middleware(req: Request, _res: Response, next: Function) {
    
    req.requestTime = new Date();
    next()
=======
import { Request, Response } from "express";

export function middleware(req: Request, _res: Response, next: Function) {
    
    req.requestTime = new Date();
    next()
>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
}