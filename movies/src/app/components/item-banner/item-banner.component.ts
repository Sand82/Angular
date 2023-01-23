import { Component, Input } from "@angular/core";
import { Item } from "../../models/item";

@Component({
  selector: "item-banner",
  templateUrl: "./item-banner.component.html",
  styleUrls: ["./item-banner.component.scss"],
})
export class ItemBannerComponent {
  @Input() items: Item[] = [];
  @Input() title: string = "";
}
