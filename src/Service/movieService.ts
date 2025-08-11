import { Movie } from '../generated/prisma';
import prisma from '../lib/prisma';
import { createMovieInput } from '../types/movie';
import { updateMovieInput } from '../types/movie';
import { deleteMovieInput } from '../types/movie';

export const createMovie = async (data: createMovieInput): Promise<Movie> => {
  return prisma.movie.create({
    data: {
      title: data.title,
      description: data.description,
      posterUrl: data.posterUrl,
      genre: data.genre,
    },
  });
};

export const updateMovie = async (data: updateMovieInput): Promise<Movie> => {
  return prisma.movie.update({
    where: {
      id: data.id,
    },
    data: {
      title: data.title,
      description: data.description,
      posterUrl: data.posterUrl,
      genre: data.genre,
    },
  });
};


export const deleteMovie = async (data: deleteMovieInput): Promise<Movie> => {
  return prisma.movie.delete({
    where: {
      id: data.id,
    },
  });
};

export const getMovies = async ():Promise<Movie[]> => {
    return prisma.movie.findMany()
}

export const getMovieById = async (id: string): Promise<Movie | null> => {
  return prisma.movie.findUnique({ where: { id } });
};