import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  ViewChildren,
  QueryList,
} from "@angular/core";
import { NgElementStrategyFactory } from "@angular/elements";
import { COURSES } from "../db-data";
import { CourseCardComponent } from "./course-card/course-card.component";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  courses = COURSES;

  course = COURSES[0];

  startDate = new Date(2000, 0, 1);

  title = COURSES[0].description;

  price = 250;

  rate = 0.58;

  @ViewChild(CourseCardComponent)
  card: CourseCardComponent;

  @ViewChild("cardRef1", { read: ElementRef })
  cardRef1: CourseCardComponent;

  @ViewChild("cardRef2")
  cardRef2: CourseCardComponent;

  @ViewChild("conteiner")
  containerDiv: NgElementStrategyFactory;

  @ViewChild("courseImage") //not posible
  courseImage: NgElementStrategyFactory;

  @ViewChildren(CourseCardComponent, { read: ElementRef })
  cards: QueryList<ElementRef>;

  constructor() {
    //console.log("containerDiv", this.cardRef1);
  }

  ngAfterViewInit(): void {
    //console.log("containerDiv", this.cardRef1);
    //this.courses[0].description = 'test';

    //console.log(this.cards.last);
    // console.log(this.cards);
    // console.log("courseImage", this.courseImage);

    this.cards.changes.subscribe((card) => console.log(card));
  }

  onCourseSelected(course: Course) {
    //console.log("app component - card clicked...", course);
    // console.log(this.cardRef1);
    // console.log(this.cardRef2);
    // console.log("containerDiv", this.cardRef1);
  }

  onCoursesEdited() {
    this.courses.push({
      id: 1,
      description: "Angular core deep dive",
      iconUrl:
        "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png",
      longDescription:
        "A detailed walk-through of the most important part of Angular - the Core and Common modules",
      category: "INTERMEDIATE",
      lessonsCount: 10,
    });
  }
}
