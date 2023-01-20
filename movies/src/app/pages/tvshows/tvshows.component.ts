import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../../service/movies.service";
import { Tvshow } from "../../models/tvshow";

@Component({
  selector: "tvshows",
  templateUrl: "./tvshows.component.html",
  styleUrls: ["./tvshows.component.scss"],
})
export class TvshowsComponent implements OnInit {
  tvshows: Tvshow[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getCurrTvshows();
  }

  getCurrTvshows() {
    this.moviesService.getTvshows().subscribe((tvshowData) => {
      this.tvshows = tvshowData;
    });
  }
}
