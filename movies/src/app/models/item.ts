export interface Item {
  id: number;
  poster_path: string;
  title?: string;
  name?: string;
  vote_average: number;
  backdrop_path: string;
  vote_count: number;
  release_date: string;
  overview: string;
  original_language?: string;
  origin_country?: string[];
  genres?: {
    id: number;
    name: string;
  }[];
  episode_run_time?: number;
  number_of_episodes?: number;
  number_of_seasons?: number;
  isTvShow?: boolean;
}
