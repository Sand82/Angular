import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  InjectionToken,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { CourseCardComponent } from "./course-card/course-card.component";
import { HighlightedDirective } from "./directives/highlighted.directive";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Course } from "./model/course";
import { CourseService } from "./services/course.service";

function coursesServiceProvider(http: HttpClient): CourseService {
  return new CourseService(http);
}

export const COURSES_SERVICE = new InjectionToken<CourseService>(
  "COURSES_SERVICE"
);

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [
    {
      provide: COURSES_SERVICE,
      useFactory: coursesServiceProvider,
      deps: [HttpClient],
    },
  ],
})
export class AppComponent implements OnInit {
  courses$: Observable<Course[]>;

  //courses: Course[];

  constructor(@Inject(COURSES_SERVICE) private coursesService: CourseService) {}

  ngOnInit() {
    this.courses$ = this.coursesService.loadCourses();
  }

  seve(course: Course) {
    this.coursesService
      .saveCourse(course)
      .subscribe(() => console.log("Course Saved!"));
  }
}
