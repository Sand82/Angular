import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  MovieDto,
  Movie,
  MovieVideoDto,
  MovieImages,
  MovieCredits,
} from "../models/movie";
import { GenresDto } from "../models/genre";
import { switchMap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  baseUrl: string = "https://api.themoviedb.org/3";
  apyKey: string = "a801d794e3c82e06fb60083af212f525";

  constructor(private http: HttpClient) {}

  getMovies(type: string = "upcoming", count: number = 12) {
    return this.http
      .get<MovieDto>(`${this.baseUrl}/movie/${type}?api_key=${this.apyKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }

  getMovie(id: string) {
    return this.http.get<Movie>(
      `${this.baseUrl}/movie/${id}?api_key=${this.apyKey}`
    );
  }

  getMovieVideos(id: string) {
    return this.http
      .get<MovieVideoDto>(
        `${this.baseUrl}/movie/${id}/videos?api_key=${this.apyKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  searchMovies(page: number) {
    return this.http
      .get<MovieDto>(
        `${this.baseUrl}/movie/popular?page=${page}&api_key=${this.apyKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  geTvs(type: string = "latest", count: number = 12) {
    return this.http
      .get<MovieDto>(`${this.baseUrl}/tv/${type}?api_key=${this.apyKey}`) // TODO change MovieDto to TvDto
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }

  getMovieImages(id: string) {
    return this.http.get<MovieImages>(
      `${this.baseUrl}/movie/${id}/images?api_key=${this.apyKey}`
    );
  }

  getMovieCreditss(id: string) {
    return this.http.get<MovieCredits>(
      `${this.baseUrl}/movie/${id}/credits?api_key=${this.apyKey}`
    );
  }

  getSimilarMovies(id: string) {
    return this.http
      .get<MovieDto>(
        `${this.baseUrl}/movie/${id}/similar?api_key=${this.apyKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getMoviesGenres() {
    return this.http
      .get<GenresDto>(`${this.baseUrl}/genre/movie/list?api_key=${this.apyKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.genres);
        })
      );
  }

  getMoviesByGenre(genreId: string, pageNumber: number) {
    return this.http
      .get<MovieDto>(
        `${this.baseUrl}/discover/movie?with_genres=${genreId}&page=${pageNumber}&api_key=${this.apyKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
}
