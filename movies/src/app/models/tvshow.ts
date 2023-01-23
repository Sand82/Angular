import { Item } from "./item";

export interface TvshowsDto {
  page: number;
  results: Tvshow[];
  total_results: number;
  total_pages: number;
}

export interface Tvshow {
  poster_path: string;
  popularity: number;
  id: number;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: string[];
  genre_ids: string[];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
}

export interface TvshowDetails {
  backdrop_path: string;
  created_by: {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string;
  }[];
  episode_run_time: number[];
  first_air_date: string;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  name: string;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

export interface TvshowGenres {
  id: number;
  name: string;
}

export interface TvShowVideoDto {
  id: number;
  results: TvShowVideo[];
}

export interface TvshowImages {
  backdrops: {
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1?: string;
    vote_average: number;
    vote_count: number;
    width: number;
  }[];
  id: number;
  posters: {
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1?: string;
    vote_average: number;
    vote_count: number;
    width: number;
  }[];
}

export interface TvShowVideo {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

export interface GenresTvshowDto {
  genres: {
    id: number;
    name: string;
  }[];
}

export const mapTvshowToItem = (tvshow: Tvshow): Item => {
  return {
    id: tvshow.id,
    title: tvshow.name,
    poster_path: tvshow.poster_path,
    vote_average: tvshow.vote_average,
    backdrop_path: tvshow.backdrop_path,
    vote_count: tvshow.vote_count,
    release_date: tvshow.first_air_date,
    overview: tvshow.overview,
    original_language: tvshow.original_language,
    origin_country: tvshow.origin_country,
    isTvShow: true,
  };
};

export const mapTvshowDetailsToItem = (tvshow: TvshowDetails): Item => {
  return {
    id: tvshow.id,
    title: tvshow.name,
    poster_path: tvshow.poster_path,
    vote_average: tvshow.vote_average,
    backdrop_path: tvshow.backdrop_path,
    vote_count: tvshow.vote_count,
    release_date: tvshow.first_air_date,
    overview: tvshow.overview,
    original_language: tvshow.original_language,
    origin_country: tvshow.origin_country,
    genres: tvshow.genres,
    episode_run_time: tvshow.episode_run_time.reduce(
      (partialSum, a) => partialSum + a,
      0
    ),
    number_of_episodes: tvshow.number_of_episodes,
    number_of_seasons: tvshow.number_of_seasons,
    isTvShow: true,
  };
};
