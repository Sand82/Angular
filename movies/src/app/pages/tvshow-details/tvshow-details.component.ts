import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { first } from "rxjs";
import { TvshowDetails } from "src/app/models/tvshow";
import { MoviesService } from "../../service/movies.service";

@Component({
  selector: "tvshow-details",
  templateUrl: "./tvshow-details.component.html",
  styleUrls: ["./tvshow-details.component.scss"],
})
export class TvshowDetailsComponent implements OnInit, OnDestroy {
  tvshow: TvshowDetails | null = null;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getCurrMovie(id);
    });
  }

  ngOnDestroy(): void {
    console.log("Component destroyed");
  }

  getCurrMovie(id: string) {
    this.moviesService.getTvshow(id).subscribe((tvshowData) => {
      this.tvshow = tvshowData;
      console.log(tvshowData);
    });
  }
}
