import {
  TvshowDetails,
  TvshowsDto,
  TvShowVideoDto,
  TvshowImages,
} from "../models/tvshow";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { switchMap } from "rxjs/operators";
import { of } from "rxjs";
import { GenresDto } from "../models/genre";

@Injectable({
  providedIn: "root",
})
export class TvshowsService {
  baseUrl: string = "https://api.themoviedb.org/3";
  apyKey: string = "a801d794e3c82e06fb60083af212f525";

  constructor(private http: HttpClient) {}

  getTvshows(type: string, count: number = 12) {
    return this.http
      .get<TvshowsDto>(`${this.baseUrl}/tv/${type}?api_key=${this.apyKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }
  getTvshow(id: string) {
    return this.http.get<TvshowDetails>(
      `${this.baseUrl}/tv/${id}?api_key=${this.apyKey}`
    );
  }

  getTvshowVideos(id: string) {
    return this.http
      .get<TvShowVideoDto>(
        `${this.baseUrl}/tv/${id}/videos?api_key=${this.apyKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getTvshowImages(id: string) {
    return this.http.get<TvshowImages>(
      `${this.baseUrl}/tv/${id}/images?api_key=${this.apyKey}`
    );
  }

  searchTvShows(page: number, searchValue?: string) {
    const uri = searchValue ? "/search/tv" : "/tv/popular";

    return this.http
      .get<TvshowsDto>(
        `${this.baseUrl}${uri}?page=${page}&query=${searchValue}&api_key=${this.apyKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getTvshowGenres() {
    return this.http
      .get<GenresDto>(`${this.baseUrl}/genre/tv/list?api_key=${this.apyKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.genres);
        })
      );
  }

  getTvshowByGenre(genreId: string, pageNumber: number) {
    return this.http
      .get<TvshowsDto>(
        `${this.baseUrl}/discover/tv?with_genres=${genreId}&page=${pageNumber}&api_key=${this.apyKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
}
