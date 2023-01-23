import { TvshowDetails, TvshowsDto } from "../models/tvshow";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { switchMap } from "rxjs/operators";
import { of } from "rxjs";

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
          return of(res.results);
        })
      );
  }
  getTvshow(id: string) {
    return this.http.get<TvshowDetails>(
      `${this.baseUrl}/tv/${id}?api_key=${this.apyKey}`
    );
  }
}
