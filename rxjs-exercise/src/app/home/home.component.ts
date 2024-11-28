import { Component, OnInit } from "@angular/core";
import { Course } from "../model/course";
import { Observable, of, throwError, timer } from "rxjs";

import { createHttpObservable } from "../common/util";
import {
  map,
  filter,
  shareReplay,
  tap,
  catchError,
  finalize,
  retryWhen,
  delayWhen,
  delay,
} from "rxjs/operators";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  beginerCourses$!: Observable<Course[]>;

  advancedCourses$!: Observable<Course[]>;

  constructor() {}

  ngOnInit() {
    const http$: Observable<Course[]> = createHttpObservable("api/courses");

    const courses$ = http$.pipe(
      tap(() => console.log("HTTP request executed")),
      map((res) => Object.values(res["payload"])),
      shareReplay(),
      retryWhen((error) => error.pipe(delay(2000)))
    );

    this.beginerCourses$ = courses$.pipe(
      map((courses: Course[]) =>
        courses.filter((x) => x.category == "BEGINNER")
      )
    );

    this.advancedCourses$ = courses$.pipe(
      map((courses: Course[]) =>
        courses.filter((x) => x.category == "ADVANCED")
      )
    );
  }
}

///////////////////////////////////////////////////////////////////////////////////////
//ERROR HANDLING CATCH ERROR AND RETRY TO DO OPERATION WITH retryWhen FUNCTION after 2s
///////////////////////////////////////////////////////////////////////////////////////

// ngOnInit() {
//   const http$: Observable<Course[]> = createHttpObservable("api/courses");

//   const courses$ = http$.pipe(
//     tap(() => console.log("HTTP request executed")),
//     map((res) => Object.values(res["payload"])),
//     shareReplay(),
//     retryWhen((error) => error.pipe(delay(2000)))
//   );

//   this.beginerCourses$ = courses$.pipe(
//     map((courses: Course[]) =>
//       courses.filter((x) => x.category == "BEGINNER")
//     )
//   );

//   this.advancedCourses$ = courses$.pipe(
//     map((courses: Course[]) =>
//       courses.filter((x) => x.category == "ADVANCED")
//     )
//   );
// }

///////////////////////////////////////////////////////////////////////////////
//ERROR HANDLING CATCH ERROR AND RETRIEVE NEW OBSERVABLE WITH finalize FUNCTION
///////////////////////////////////////////////////////////////////////////////

// ngOnInit() {
//   const http$: Observable<Course[]> = createHttpObservable("api/courses");

//   const courses$ = http$.pipe(
//     catchError((err) => {
//       console.log("Error occurreed", err);
//       return throwError(err);
//     }),
//     finalize(() => {
//       console.log("Finilize executed..");
//     }),
//     tap(() => console.log("HTTP request executed")),
//     map((res) => Object.values(res["payload"])),
//     shareReplay()
//   );

//   this.beginerCourses$ = courses$.pipe(
//     map((courses: Course[]) =>
//       courses.filter((x) => x.category == "BEGINNER")
//     )
//   );

//   this.advancedCourses$ = courses$.pipe(
//     map((courses: Course[]) =>
//       courses.filter((x) => x.category == "ADVANCED")
//     )
//   );
// }

/////////////////////////////////////////////////////////////////////////////////
//ERROR HANDLING CATCH ERROR AND RETRIEVE NEW OBSERVABLE WITH catchError FUNCTION
/////////////////////////////////////////////////////////////////////////////////

// ngOnInit() {
//   const http$: Observable<Course[]> = createHttpObservable("api/courses");

//   const courses$ = http$.pipe(
//     tap(() => console.log("HTTP request executed")),
//     map((res) => Object.values(res["payload"])),
//     shareReplay(),
//     catchError((err) =>
//       of([
//         {
//           id: 0,
//           description: "RxJs In Practice Course",
//           iconUrl:
//             "https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png",
//           courseListIcon:
//             "https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png",
//           longDescription:
//             "Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples",
//           category: "BEGINNER",
//           lessonsCount: 10,
//         },
//       ])
//     )
//   );

//   this.beginerCourses$ = courses$.pipe(
//     map((courses: Course[]) =>
//       courses.filter((x) => x.category == "BEGINNER")
//     )
//   );

//   this.advancedCourses$ = courses$.pipe(
//     map((courses: Course[]) =>
//       courses.filter((x) => x.category == "ADVANCED")
//     )
//   );
// }

////////////////////////////////////////////
//RxJs shareReplay() FOR SHERED HTTP REQUEST
////////////////////////////////////////////

// ngOnInit() {
//     const http$: Observable<Course[]> = createHttpObservable("api/courses");

//     const courses$ = http$.pipe(
//       tap(() => console.log("HTTP request executed")),
//       map((res) => Object.values(res["payload"])),
//       shareReplay()
//     );

//     courses$.subscribe();
//     courses$.subscribe();
//     courses$.subscribe();

//     this.beginerCourses$ = courses$.pipe(
//       map((courses: Course[]) =>
//         courses.filter((x) => x.category == "BEGINNER")
//       )
//     );

//     this.advancedCourses$ = courses$.pipe(
//       map((courses: Course[]) =>
//         courses.filter((x) => x.category == "ADVANCED")
//       )
//     );
//   }

////////////////////////
//RxJs REACTIVE DESIGN
////////////////////////

// ngOnInit() {
//     const http$: Observable<Course[]> = createHttpObservable("api/courses");

//     const courses$: Observable<Course[]> = http$.pipe(
//       map((res) => Object.values(res["payload"]))
//     );

//     this.beginerCourses$ = courses$.pipe(
//       map((courses) => courses.filter((x) => x.category == "BEGINNER"))
//     );

//     this.advancedCourses$ = courses$.pipe(
//       map((courses) => courses.filter((x) => x.category == "ADVANCED"))
//     );
//   }

////////////////////////
//RxJs IMPERATIVE DESIGN
////////////////////////

// ngOnInit() {
//     const http$ = createHttpObservable("api/courses");

//     const courses$ = http$.pipe(map((res) => Object.values(res["payload"])));

//     courses$.subscribe((res: Course[]) => {
//       this.beginerCourses = res.filter((x) => x.category === "BEGINNER");
//       this.advancedCourses = res.filter((x) => x.category === "ADVANCED");
//     });
//   }
