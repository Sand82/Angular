import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LessonDetail } from "../model/lesson-detail";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

@Component({
  selector: "lesson",
  templateUrl: "./lesson-detail.component.html",
  standalone: false,
  styleUrls: ["./lesson-detail.component.css"],
})
export class LessonDetailComponent implements OnInit {
  lesson$: Observable<LessonDetail>;

  constructor(private route: ActivatedRoute) {
    console.log("Created LessonDetailComponent...");
  }

  ngOnInit() {
    this.lesson$ = this.route.snapshot.data["lesson"];
  }
}
