import { Component, Input } from "@angular/core";
import { Movie } from "../../models/movie";

@Component({
  selector: "item-banner",
  templateUrl: "./item-banner.component.html",
  styleUrls: ["./item-banner.component.scss"],
})
export class ItemBannerComponent {
  @Input() items: Movie[] = [];
  @Input() title: string = "";
}
