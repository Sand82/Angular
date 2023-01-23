import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { first } from "rxjs";
import { Item } from "../../models/item";
import { TvshowsService } from "../../service/tvshows.service";
import { IMAGES_SIZES } from "../../constants/images-sizes";
import { mapTvshowDetailsToItem } from "../../models/tvshow";
import { TvShowVideo, TvshowImages } from "../../models/tvshow";

@Component({
  selector: "tvshow-details",
  templateUrl: "./tvshow-details.component.html",
  styleUrls: ["./tvshow-details.component.scss"],
})
export class TvshowDetailsComponent implements OnInit, OnDestroy {
  tvshow: Item | null = null;
  tvShowVideos: TvShowVideo[] = [];
  imagesSizes = IMAGES_SIZES;
  tvShowImages: TvshowImages | null = null;

  constructor(
    private route: ActivatedRoute,
    private tvshowsService: TvshowsService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getCurrTvshow(id);
      this.getCurrtvshowVideos(id);
      this.getCurrTvshowImages(id);
    });
  }

  ngOnDestroy(): void {
    console.log("Component destroyed");
  }

  getCurrTvshow(id: string) {
    this.tvshowsService.getTvshow(id).subscribe((tvshowData) => {
      this.tvshow = mapTvshowDetailsToItem(tvshowData);
    });
  }

  getCurrtvshowVideos(id: string) {
    this.tvshowsService.getTvshowVideos(id).subscribe((tvshowVideosData) => {
      this.tvShowVideos = tvshowVideosData;
    });
  }

  getCurrTvshowImages(id: string) {
    this.tvshowsService.getTvshowImages(id).subscribe((tvshowImageData) => {
      this.tvShowImages = tvshowImageData;
    });
  }
}
