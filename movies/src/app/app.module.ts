import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { HomeComponent } from "./pages/home/home.component";
import { MoviesComponent } from "./pages/movies/movies.component";
import { HttpClientModule } from "@angular/common/http";
import { SliderComponent } from "./components/slider/slider.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ItemBannerComponent } from "./components/item-banner/item-banner.component";
import { ItemComponent } from "./components/item/item.component";
import { PaginatorModule } from "primeng/paginator";
import { MovieComponent } from "./pages/movie/movie.component";
import { TabViewModule } from "primeng/tabview";
import { VideoEmbedComponent } from "./components/video-embed/video-embed.component";
import { ImageModule } from "primeng/image";
import { CarouselModule } from "primeng/carousel";
import { GenreComponent } from "./pages/genre/genre.component";
import { InputTextModule } from "primeng/inputtext";
import { TvshowsComponent } from "./pages/tvshows/tvshows.component";
import { TvshowItemComponent } from "./components/tvshow-item/tvshow-item.component";
import { TvshowDetailsComponent } from "./pages/tvshow-details/tvshow-details.component";
import { GalleriaModule } from "primeng/galleria";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    SliderComponent,
    ItemBannerComponent,
    ItemComponent,
    MovieComponent,
    VideoEmbedComponent,
    GenreComponent,
    TvshowsComponent,
    TvshowItemComponent,
    TvshowDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    PaginatorModule,
    TabViewModule,
    ImageModule,
    CarouselModule,
    InputTextModule,
    GalleriaModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
