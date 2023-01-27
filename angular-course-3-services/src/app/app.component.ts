import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  InjectionToken,
  OnChanges,
  OnDestroy,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { CourseCardComponent } from "./course-card/course-card.component";
import { HighlightedDirective } from "./directives/highlighted.directive";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Course } from "./model/course";
import { CourseService } from "./services/course.service";
import { AppConfig, APP_CONFIG, CONFIG_TOKEN } from "./config";

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
  //changeDetection: ChangeDetectionStrategy.OnPush,
  //dependency decorator
  //providers: [{ provide: CONFIG_TOKEN, useFactory: () => APP_CONFIG }], // first way adding a config object like dependency injection, is not tree shakable way
  //providers: [{ provide: CONFIG_TOKEN, useValue: APP_CONFIG }], //second way adding a config object like dependency injection, is not tree shakable way

  // providers: [
  //   {
  //     //provide: COURSES_SERVICE,
  //     provide: CourseService,
  //     useFactory: coursesServiceProvider,
  //     deps: [HttpClient],
  //   },
  // ],  // first way adding a service with dependency injection, is not tree shakable

  // providers: [CourseService], // second way adding a service with dependency injection, is not tree shakable
})
export class AppComponent
  implements
    OnInit,
    OnDestroy,
    OnChanges,
    AfterContentChecked,
    AfterViewChecked,
    AfterContentInit,
    AfterViewInit
{
  //courses$: Observable<Course[]>;

  //courses: Course[]

  courses = COURSES;

  //constructor(@Inject(COURSES_SERVICE) private coursesService: CourseService) {}
  //constructor(@Self() private coursesService: CourseService) {} //override default behavior of dependency injection and this sevice instance come from component him self
  //constructor(@SkipSelf() private coursesService: CourseService) {} //override default behavior of dependency injection and it is opposite to @Self(), make sure no private provided instance
  constructor(
    private coursesService: CourseService,
    @Inject(CONFIG_TOKEN) private config: AppConfig,
    private cd: ChangeDetectorRef
  ) {
    console.log("constructor");
  }

  ngOnInit() {
    // //this.courses$ = this.coursesService.loadCourses();
    // this.coursesService.loadCourses().subscribe((data) => {
    //   this.courses = data;
    //   //this.cd.markForCheck(); //first way to implement change detection listener
    // });

    console.log("ngOnInit");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

  ngDoCheck() {
    //first way to implement change detection listener
    this.cd.markForCheck();

    console.log("ngDoCheck");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  onEditCourse() {
    // const currCourse = this.courses[0];
    // const newCourse: any = { ...currCourse };
    // newCourse.description = "New Value";
    // this.courses[0] = newCourse;
  }

  seve(course: Course) {
    this.coursesService
      .saveCourse(course)
      .subscribe(() => console.log("Course Saved!"));
  }
}
