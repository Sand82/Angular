import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { first } from "rxjs";
import { TvshowDetails } from "src/app/models/tvshow";
import { TvshowsService } from "../../service/tvshows.service";
import { IMAGES_SIZES } from "../../constants/images-sizes";

@Component({
  selector: "tvshow-details",
  templateUrl: "./tvshow-details.component.html",
  styleUrls: ["./tvshow-details.component.scss"],
})
export class TvshowDetailsComponent implements OnInit, OnDestroy {
  tvshow: TvshowDetails | null = null;
  imagesSizes = IMAGES_SIZES;

  constructor(
    private route: ActivatedRoute,
    private tvshowsService: TvshowsService
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
    this.tvshowsService.getTvshow(id).subscribe((tvshowData) => {
      this.tvshow = tvshowData;
    });
  }
}
