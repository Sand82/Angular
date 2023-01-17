import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../../service/movies.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  movies: any = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((responce: any) => {
      this.movies = responce.results;
    });
  }
}
