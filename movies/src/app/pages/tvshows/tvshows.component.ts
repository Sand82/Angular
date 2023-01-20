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
    this.getCurrTvshows(1);
  }

  getCurrTvshows(page: number) {
    this.moviesService.getTvshows(page).subscribe((tvshowData) => {
      this.tvshows = tvshowData;
    });
  }

  paginate(event: any) {
    let currPage = event.page + 1;
    this.getCurrTvshows(currPage);
  }
}
