import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import config from '../../../config';
import * as userService from '../../../Service/userService';
import logger from '../../../lib/logger';

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res
        .status(400)
        .json({ message: 'email dan password tidak boleh kosong' });
      return;
    }

    const user = await userService.findUser({
      email: email,
    });

    if (!user) {
      res.status(400).json({ message: 'tidak ada user dengan email ini ' });
      return;
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      res.status(400).json({ message: 'password salah' });
      return;
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      config.JWTSECRET,
      { expiresIn: '1d' },
    );

    logger.info(`login dengan email: ${user.email} sukses`);
    res.status(200).json({
      message: 'login berhasil',token});
  } catch (error) {
    logger.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
    return;
  }
};
