import { Component, OnInit } from "@angular/core";
import { TvshowsService } from "../../service/tvshows.service";
import { Tvshow } from "../../models/tvshow";

@Component({
  selector: "tvshows",
  templateUrl: "./tvshows.component.html",
  styleUrls: ["./tvshows.component.scss"],
})
export class TvshowsComponent implements OnInit {
  tvshows: Tvshow[] = [];

  constructor(private tvshowsService: TvshowsService) {}

  ngOnInit(): void {
    this.getCurrTvshows(1);
  }

  getCurrTvshows(page: number) {
    this.tvshowsService.getTvshows(page).subscribe((tvshowData) => {
      this.tvshows = tvshowData;
    });
  }

  paginate(event: any) {
    let currPage = event.page + 1;
    this.getCurrTvshows(currPage);
  }
}
