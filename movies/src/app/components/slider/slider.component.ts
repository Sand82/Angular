import { Component, Input, OnInit } from "@angular/core";
import { Item } from "../../models/item";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import { IMAGES_SIZES } from "../../constants/images-sizes";

@Component({
  selector: "slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"],
  animations: [
    trigger("slideFade", [
      state("void", style({ opacity: 0 })),
      transition("void <=> *", [animate("1s")]),
      //transition("* => void", [animate("500ms")]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  @Input() items: Item[] = [];
  @Input() isBanner: boolean = false;

  currentSlideIndex: number = 0;

  readonly imagesSizes = IMAGES_SIZES;

  constructor() {}

  ngOnInit(): void {
    if (!this.isBanner) {
      setInterval(() => {
        this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
      }, 5000);
    }
  }
}
