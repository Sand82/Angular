import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IMAGES_SIZES } from "../../constants/images-sizes";
import { MoviesService } from "../../service/movies.service";
import {
  Movie,
  MovieVideo,
  MovieImages,
  MovieCredits,
  mapMovieToItem,
} from "../../models/movie";
import { Item } from "../../models/item";
import { first } from "rxjs";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"],
})
export class MovieComponent implements OnInit, OnDestroy {
  movie: Movie | null = null;
  movieVideos: MovieVideo[] = [];
  imagesSizes = IMAGES_SIZES;
  movieImages: MovieImages | null = null;
  movieCredits: MovieCredits | null = null;
  moviesSimilar: Item[] = [];

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getCurrMovie(id);
      this.getCurrMovieVideos(id);
      this.getCurrMovieImages(id);
      this.getCurrMovieCredits(id);
      this.getCurrMovieSimilar(id);
    });
  }

  ngOnDestroy(): void {
    console.log("Component destroyed");
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

  getCurrMovieCredits(id: string) {
    this.moviesService.getMovieCreditss(id).subscribe((movieCreditsData) => {
      this.movieCredits = movieCreditsData;
    });
  }

  getCurrMovieSimilar(id: string) {
    this.moviesService.getSimilarMovies(id).subscribe((moviesSimilarData) => {
      this.moviesSimilar = moviesSimilarData.map((m) => mapMovieToItem(m));
    });
  }
}
