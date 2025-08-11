import logger from '../../../lib/logger';
import { Request, Response } from 'express';
import { registerInput } from '../../../types/auth';
import * as userService from '../../../Service/userService';
import bcrypt from 'bcrypt';
import prisma from '../../../lib/prisma';

export const register = async (req: Request, res: Response) => {
  try {
    const input: registerInput = req.body;
    if (!input.email || !input.password || !input.name) {
      res.status(400).json({ message: 'data inputan tidak boleh kosong' });
      return;
    }
    const user = await userService.findUser({
      email: input.email,
    });

    if (user) {
      res
        .status(400)
        .json({ message: `user dengan email: ${input.email} sudah ada` });
      return;
    }

    const hashPassword = await bcrypt.hash(input.password, 10);

    const newUser = await userService.createUser({
      email: input.email,
      password: hashPassword,
      name: input.name,
    });

    res.status(201).json({
      message: 'Berhasil Membuat user',
    });
  } catch (error) {
    res.status(500).json({ error: 'Terjadi kesalahan di server' });
    return;
  }
};
