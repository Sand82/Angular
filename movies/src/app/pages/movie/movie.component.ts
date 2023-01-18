import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IMAGES_SIZES } from "../../constants/images-sizes";
import { MoviesService } from "../../service/movies.service";
import { Movie, MovieVideo, MovieImages } from "../../models/movie";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"],
})
export class MovieComponent implements OnInit {
  movie: Movie | null = null;
  movieVideos: MovieVideo[] = [];
  imagesSizes = IMAGES_SIZES;
  movieImages: MovieImages | null = null;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.getCurrMovie(id);
      this.getCurrMovieVideos(id);
      this.getCurrMovieImages(id);
    });
  }

  getCurrMovie(id: string) {
    this.moviesService.getMovie(id).subscribe((movieData) => {
      this.movie = movieData;
    });
  }

  getCurrMovieVideos(id: string) {
    this.moviesService.getMovieVideos(id).subscribe((movieVideData) => {
      this.movieVideos = movieVideData;
    });
  }

  getCurrMovieImages(id: string) {
    this.moviesService.getMovieImages(id).subscribe((movieImagesData) => {
      this.movieImages = movieImagesData;
    });
  }
}
