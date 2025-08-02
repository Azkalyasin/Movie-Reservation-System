import prisma from "../lib/prisma";
import { registerInput } from "../types/auth";
import { findUnique } from "../types/auth";
import { User } from "../generated/prisma";

export const createUser = async(data: registerInput): Promise<User> => {
    return prisma.user.create({
        data: {
            email: data.email,
            password: data.password,
            name: data.name,
        }
    })
};


export const findUser = async (data: findUnique): Promise<User | null> =>{
    return prisma.user.findUnique({
        where: {
            email: data.email,
        }
    })
}





