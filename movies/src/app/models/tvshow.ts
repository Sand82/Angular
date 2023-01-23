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
  };
};
