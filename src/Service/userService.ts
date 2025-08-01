import prisma from "../lib/prisma";
import { registerInput } from "../types/auth";
import { User } from "../generated/prisma";





const createUser = async(data: registerInput): Promise<User> => {

    return prisma.user.create({
        data: {
            email: data.email,
            password: data.password,
            name: data.name,
        }
    })
}

export default createUser


