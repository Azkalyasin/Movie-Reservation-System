import { Request, Response } from 'express';
import * as movieService from '../../../Service/movieService';

export const getAllMovie = async (req: Request, res: Response) => {
  try {
    const allMovie = await movieService.getMovies()
    res.status(200).json({allMovie})
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
};