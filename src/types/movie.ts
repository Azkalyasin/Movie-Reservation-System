export interface createMovieInput {
  title: string;
  description: string;
  posterUrl: string;
  genre: string;
}

export interface updateMovieInput {
  id: string;
  title?: string;
  description?: string;
  posterUrl?: string;
  genre?: string;
}

export interface deleteMovieInput {
    id:string
}
