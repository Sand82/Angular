import { Component, OnInit } from "@angular/core";
import { Genre } from "src/app/models/genre";
import { MoviesService } from "../../service/movies.service";

@Component({
  selector: "app-genre",
  templateUrl: "./genre.component.html",
  styleUrls: ["./genre.component.scss"],
})
export class GenreComponent implements OnInit {
  genres: Genre[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.getCurrMoviesGenre();
  }

  getCurrMoviesGenre() {
    this.moviesService.getMoviesGenres().subscribe((generData) => {
      this.genres = generData;
    });
  }
}
