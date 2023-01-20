import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { MoviesComponent } from "./pages/movies/movies.component";
import { MovieComponent } from "./pages/movie/movie.component";
import { GenreComponent } from "./pages/genre/genre.component";
import { TvshowsComponent } from "./pages/tvshows/tvshows.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "movies",
    component: MoviesComponent,
  },
  {
    path: "tvshows",
    component: TvshowsComponent,
  },
  {
    path: "movies/genres/:genreId",
    component: MoviesComponent,
  },
  {
    path: "movie/:id",
    component: MovieComponent,
  },
  {
    path: "genres",
    component: GenreComponent,
  },
  {
    path: "**",
    redirectTo: "",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
