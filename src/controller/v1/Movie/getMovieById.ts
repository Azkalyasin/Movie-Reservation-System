import { Request, Response } from 'express';
import * as movieService from '../../../Service/movieService';

export const getMovieById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const findMovie = await movieService.getMovieById(id);
    if (!findMovie) {
      res.status(400).json({ message: `tidak ada dengan id: ${id}` });
      return;
    }

    res.status(200).json({message: `data berdasrkan id ${id}`, findMovie})
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
};
