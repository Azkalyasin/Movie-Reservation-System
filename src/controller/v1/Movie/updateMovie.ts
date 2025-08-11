import { Request, Response } from 'express';
import * as movieService from '../../../Service/movieService';

export const updateMovie = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, posterUrl, genre } = req.body;

    if (!title || !description || !posterUrl || !genre) {
      res.status(400).json({ massage: 'input wajib di isi' });
      return;
    }

    const findMovie = await movieService.getMovieById(id);
    if (!findMovie) {
      res.status(400).json({ message: `tidak ada dengan id: ${id}` });
      return;
    }

    const update = await movieService.updateMovie({
      id: id,
      title: title,
      description: description,
      posterUrl: posterUrl,
      genre: genre,
    });
    res.status(200).json({ message: 'berhasil update data movie', update });
    return;
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
};
