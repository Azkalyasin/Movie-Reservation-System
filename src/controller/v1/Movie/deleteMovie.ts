import { Request, Response } from 'express';
import * as movieService from '../../../Service/movieService';

export const deleteMovie = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const findMovie = await movieService.getMovieById(id);
    if (!findMovie) {
      res.status(400).json({ message: `tidak ada dengan id: ${id}` });
      return;
    }

    const deleteMovie = await movieService.deleteMovie({
        id: id
    })
    res.status(200).json({message: "berhasil menghapus data", deleteMovie})
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
};
