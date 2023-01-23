import { Component, OnInit } from "@angular/core";
import { Genre } from "src/app/models/genre";
import { TvshowGenres } from "../../models/tvshow";
import { MoviesService } from "../../service/movies.service";
import { TvshowsService } from "../../service/tvshows.service";

@Component({
  selector: "app-genre",
  templateUrl: "./genre.component.html",
  styleUrls: ["./genre.component.scss"],
})
export class GenreComponent implements OnInit {
  movieGenres: Genre[] = [];
  tvshowGenres: Genre[] = [];

  constructor(
    private moviesService: MoviesService,
    private tvshowsService: TvshowsService
  ) {}

  ngOnInit() {
    this.getCurrMoviesGenre();
    this.getCurrTvshowsGener();
  }

  getCurrMoviesGenre() {
    this.moviesService.getMoviesGenres().subscribe((generData) => {
      this.movieGenres = generData;
    });
  }

  getCurrTvshowsGener() {
    this.tvshowsService.getTvshowGenres().subscribe((tvshowsGenerData) => {
      this.tvshowGenres = tvshowsGenerData;
    });
  }
}
