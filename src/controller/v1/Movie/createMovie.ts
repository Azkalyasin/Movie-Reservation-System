import { Request, Response } from 'express';
import * as movieService from '../../../Service/movieService';

export const createMovie = async (req: Request, res: Response) => {
  try {
    const { title, description, posterUrl, genre } = req.body;
    if (!title || !description || !posterUrl || !genre) {
      res.status(400).json({ massage: 'input wajib di isi' });
      return;
    }

    const newMovie = await movieService.createMovie({
      title: title,
      description: description,
      posterUrl: posterUrl,
      genre: genre,
    });

    res
      .status(201)
      .json({ message: 'berhasil menambahakan movie baru: ', newMovie });
    return;
  } catch (error) {
    res.status(500).json({message: "Terjadi kesalahan server"})
  }
};
