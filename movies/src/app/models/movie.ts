import { Item } from "./item";

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  revenue: number;
  runtime: number;
  status: string;
  genres: Genre[];
}

export interface MovieDto {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieVideoDto {
  id: number;
  results: MovieVideo[];
}

export interface MovieVideo {
  site: string;
  key: string;
}

export interface MovieImages {
  backdrops: {
    file_path: string;
  }[];
}

export interface MovieCredits {
  cast: {
    name: string;
    profile_path: string;
  }[];
}

export const mapMovieToItem = (tvshow: Movie): Item => {
  return {
    id: tvshow.id,
    title: tvshow.title,
    poster_path: tvshow.poster_path,
    vote_average: tvshow.vote_average,
    backdrop_path: tvshow.backdrop_path,
    vote_count: tvshow.vote_count,
    release_date: tvshow.release_date,
    overview: tvshow.overview,
  };
};
