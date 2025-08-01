import logger from "../../../lib/logger";
import { Request, Response } from "express";
import { registerInput } from "../../../types/auth";
import createUser from "../../../Service/userService";
import bcrypt from "bcrypt"
import prisma from "../../../lib/prisma";

export const register = async (req: Request, res:Response):Promise<void> => {
    try {
        const input: registerInput = req.body;
        if(!input.email || !input.password || !input.password){
            res.status(400).json({message: "data inputan tidak boleh kosong"})
            return;
        };
        const findUser = await prisma.user.findUnique({
            where: {
                email:input.email
            }
        });
        if (findUser){
            res.status(400).json({message: `user dengan email: ${input.email} sudah ada`})
            return;
        };

        const hashPassword = await bcrypt.hash(input.password, 10);

        const newUser = await createUser({
            email: input.email,
            password: hashPassword,
            name: input.name
        });

        res.status(201).json({
            message: "Berhasil Membuat user",
        })
    }catch(error){
        res.status(500).json({error: "Terjadi kesalahan di server"})
        return;
    }
}


