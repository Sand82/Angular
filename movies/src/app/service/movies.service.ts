import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MovieDto } from "../models/movie";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  baseUrl: string = "https://api.themoviedb.org/3";
  apyKey: string = "a801d794e3c82e06fb60083af212f525";

  constructor(private http: HttpClient) {}

  getMovies(type: string = "upcoming") {
    return this.http.get<MovieDto>(
      `${this.baseUrl}/movie/${type}?api_key=${this.apyKey}`
    );
  }
}
