import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MovieDto } from "../models/movie";
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

  getvs(type: string = "latest", count: number = 12) {
    return this.http
      .get<MovieDto>(`${this.baseUrl}/tv/${type}?api_key=${this.apyKey}`) // TODO change MovieDto to TvDto
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }
}
