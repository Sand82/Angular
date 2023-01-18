import { Component, Input, OnInit } from "@angular/core";
import { Movie } from "../../models/movie";
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
  @Input() items: Movie[] = [];

  currentSlideIndex: number = 0;

  readonly imagesSizes = IMAGES_SIZES;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
    }, 5000);
  }
}
