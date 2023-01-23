import { Component, OnInit } from "@angular/core";
import { Item } from "../../models/item";
import { MoviesService } from "../../service/movies.service";
import { mapMovieToItem } from "../../models/movie";
import { TvshowsService } from "../../service/tvshows.service";
import { mapTvshowToItem } from "src/app/models/tvshow";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  popularMovies: Item[] = [];
  upcomingMovies: Item[] = [];
  topRatedMovies: Item[] = [];
  popularTvShows: Item[] = [];

  constructor(
    private moviesService: MoviesService,
    private tvshowsService: TvshowsService
  ) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((movies) => {
      this.popularMovies = movies.map((m) => mapMovieToItem(m));
    });

    this.moviesService.getMovies("upcoming").subscribe((movies) => {
      this.upcomingMovies = movies.map((m) => mapMovieToItem(m));
    });

    this.moviesService.getMovies("top_rated").subscribe((movies) => {
      this.topRatedMovies = movies.map((m) => mapMovieToItem(m));
    });

    this.tvshowsService.getTvshows("popular").subscribe((tvshows) => {
      this.popularTvShows = tvshows.map((t) => mapTvshowToItem(t));
    });
  }
}
