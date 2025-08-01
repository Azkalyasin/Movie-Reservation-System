import logger from "../../../lib/logger";
import { Request, Response } from "express";
import { registerInput } from "../../../types/auth";
import createUser from "../../../Service/userService";

const register = async (req: Request, res:Response):Promise<void> => {
    try {
        const input: registerInput = req.body;
        if(!input.email || !input.password || !input.password){
            res.status(400).json({message: "data inputan tidak boleh kosong"})
            return;
        }
    }catch(error){
        res.status(500).json({error: error})
        return;
    }
}

export default register;
