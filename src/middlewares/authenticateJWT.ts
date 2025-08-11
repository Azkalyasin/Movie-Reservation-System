import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

import config from "../config";


export const validJwt = (req: Request, res: Response, next:NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")){
        res.status(401).json({ message: "Token tidak ditemukan" })
        return;
    }

    const token = authHeader.split(" ")[1];

    try {
        const validToken = jwt.verify(token, config.JWTSECRET);
        (req as any).user = validToken;
        next();
    }catch{
        return res.status(403).json({ message: "Token tidak valid" });
    }
}