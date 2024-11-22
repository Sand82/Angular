import { Component, OnInit } from "@angular/core";
import { Course } from "../model/course";
import { Observable } from "rxjs";

import { createHttpObservable } from "../common/util";
import { map, filter, shareReplay, tap } from "rxjs/operators";

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
      shareReplay()
    );

    courses$.subscribe();
    courses$.subscribe();
    courses$.subscribe();

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
