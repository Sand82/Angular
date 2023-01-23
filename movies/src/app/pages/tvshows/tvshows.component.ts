import { Component, OnInit } from "@angular/core";
import { TvshowsService } from "../../service/tvshows.service";
import { Tvshow } from "../../models/tvshow";
import { ActivatedRoute } from "@angular/router";
import { take } from "rxjs";

@Component({
  selector: "tvshows",
  templateUrl: "./tvshows.component.html",
  styleUrls: ["./tvshows.component.scss"],
})
export class TvshowsComponent implements OnInit {
  tvshows: Tvshow[] = [];
  genreId: string | null = null;
  searchValue: string | null = null;

  constructor(
    private tvshowsService: TvshowsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
      if (genreId) {
        this.genreId = genreId;
        this.getCurrTvshowsByGener(genreId, 1);
      } else {
        this.getPagedTvshows(1);
      }
    });
  }

  getPagedTvshows(page: number, searchKeyword?: string) {
    this.tvshowsService
      .searchTvShows(page, searchKeyword)
      .subscribe((tvshowData) => {
        this.tvshows = tvshowData;
      });
  }

  paginate(event: any) {
    let currPage = event.page + 1;

    if (this.genreId) {
      this.getCurrTvshowsByGener(this.genreId, currPage);
    } else {
      if (this.searchValue) {
        this.getPagedTvshows(currPage, this.searchValue);
      } else {
        this.getPagedTvshows(currPage);
      }
    }
  }

  getCurrTvshowsByGener(genreId: string, page: number) {
    this.tvshowsService
      .getTvshowByGenre(genreId, page)
      .subscribe((moviesBygenreData) => {
        this.tvshows = moviesBygenreData;
      });
  }

  searchChanged() {
    if (this.searchValue) {
      this.getPagedTvshows(1, this.searchValue);
    }
  }
}
