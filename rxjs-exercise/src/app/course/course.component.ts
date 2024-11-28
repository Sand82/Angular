import { RxJsLoggingLevel, setRxJsLoggingLevel } from "./../common/debug";
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "../model/course";
import {
  debounceTime,
  distinctUntilChanged,
  startWith,
  tap,
  delay,
  map,
  concatMap,
  switchMap,
  withLatestFrom,
  concatAll,
  shareReplay,
  throttleTime,
} from "rxjs/operators";
import { merge, fromEvent, Observable, concat, forkJoin } from "rxjs";
import { Lesson } from "../model/lesson";
import { createHttpObservable } from "../common/util";
import { debug } from "../common/debug";

@Component({
  selector: "course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"],
})
export class CourseComponent implements OnInit, AfterViewInit {
  course$: Observable<Course[]>;
  lessons$: Observable<Lesson[]>;
  courseId!: string;

  @ViewChild("searchInput", { static: true }) input: ElementRef;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.courseId = this.route.snapshot.params["id"];
    const course$ = createHttpObservable(`api/courses/${this.courseId}`);

    const lessons$ = this.loadLessons();

    forkJoin([course$, lessons$])
      .pipe(debug(RxJsLoggingLevel.INFO, "forkJoin: "))
      .subscribe();
  }

  ngAfterViewInit() {
    fromEvent<any>(this.input.nativeElement, "keyup")
      .pipe(
        map((event: any) => event.target.value),
        throttleTime(500)
      )
      .subscribe(console.log);
  }

  loadLessons(serach = ""): Observable<Lesson[]> {
    return createHttpObservable(
      `api/lessons?courseId=${this.courseId}&pageSize=100&filter=${serach}`
    ).pipe(map((res) => res["payload"]));
  }
}

///////////////////////
//USE CUSTOM OBSERVABLE
///////////////////////

// ngOnInit() {
//   this.courseId = this.route.snapshot.params["id"];
//   this.course$ = createHttpObservable(`api/courses/${this.courseId}`).pipe(
//     debug(RxJsLoggingLevel.INFO, "course: ")
//   );

//   setRxJsLoggingLevel(RxJsLoggingLevel.DEBUG);
// }

// ngAfterViewInit() {
//   this.lessons$ = fromEvent<any>(this.input.nativeElement, "keyup").pipe(
//     map((event: any) => event.target.value),
//     startWith(""),
//     debug(RxJsLoggingLevel.TRACE, "search: "),
//     debounceTime(400),
//     distinctUntilChanged(),
//     switchMap((serach) => this.loadLessons(serach)),
//     debug(RxJsLoggingLevel.DEBUG, "Lesonst value: ")
//   );
// }

// loadLessons(serach = ""): Observable<Lesson[]> {
//   return createHttpObservable(
//     `api/lessons?courseId=${this.courseId}&pageSize=100&filter=${serach}`
//   ).pipe(map((res) => res["payload"]));
// }

///////////
//STARTWITH
///////////

// ngOnInit() {
//   this.courseId = this.route.snapshot.params["id"];
//   this.course$ = createHttpObservable(`api/courses/${this.courseId}`);
// }

// ngAfterViewInit() {
//   const lessons$ = fromEvent<any>(this.input.nativeElement, "keyup").pipe(
//     map((event: any) => event.target.value),
//     startWith(""),
//     debounceTime(400),
//     distinctUntilChanged(),
//     switchMap((serach) => this.loadLessons(serach))
//   );
// }

// loadLessons(serach = ""): Observable<Lesson[]> {
//   return createHttpObservable(
//     `api/lessons?courseId=${this.courseId}&pageSize=100&filter=${serach}`
//   ).pipe(map((res) => res["payload"]));
// }

///////////
//SWITCHMAP
///////////

// ngOnInit() {
//   this.courseId = this.route.snapshot.params["id"];
//   this.course$ = createHttpObservable(`api/courses/${this.courseId}`);
// }

// ngAfterViewInit() {
//   const searchLessons$ = fromEvent<any>(
//     this.input.nativeElement,
//     "keyup"
//   ).pipe(
//     map((event: any) => event.target.value),
//     debounceTime(400),
//     distinctUntilChanged(),
//     switchMap((serach) => this.loadLessons(serach))
//   );

//   const initialLessons$ = this.loadLessons();
//   this.lessons$ = concat(initialLessons$, searchLessons$);

//   this.lessons$.subscribe((data) => console.log(data));
// }

// loadLessons(serach = ""): Observable<Lesson[]> {
//   return createHttpObservable(
//     `api/lessons?courseId=${this.courseId}&pageSize=100&filter=${serach}`
//   ).pipe(map((res) => res["payload"]));
// }
