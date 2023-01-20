import { Component, OnInit, Input } from "@angular/core";
import { Tvshow } from "../../models/tvshow";
import { IMAGES_SIZES } from "../../constants/images-sizes";

@Component({
  selector: "tvshow",
  templateUrl: "./tvshow-item.component.html",
  styleUrls: ["./tvshow-item.component.scss"],
})
export class TvshowItemComponent implements OnInit {
  @Input() tvshowData: Tvshow | null = null;

  imagesSizes = IMAGES_SIZES;

  constructor() {}

  ngOnInit(): void {}
}
