import { Component, OnInit } from "@angular/core";
import { Movie } from "../../models/movie";
import { MoviesService } from "../../service/movies.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((responce: any) => {
      this.popularMovies = responce.results;
    });

    this.moviesService.getMovies("upcoming").subscribe((responce: any) => {
      this.upcomingMovies = responce.results;
    });

    this.moviesService.getMovies("top_rated").subscribe((responce: any) => {
      this.topRatedMovies = responce.results;
    });
  }
}
