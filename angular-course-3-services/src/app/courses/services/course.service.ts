import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "../../model/course";

let counter = 0;

@Injectable({
  // providedIn: "root", // first way
  // useFactory: (http) => new CourseService(http),
  // deps: [HttpClient],

  // providedIn: "root", // second way
  // useClass: CourseService,

  providedIn: "root", // configuration to tree shakable provider
})
export class CourseService {
  constructor(private http: HttpClient) {
    console.log(++counter);
  }

  baseUrl: string = "http://localhost:9100/api";

  loadCourses(): Observable<Course[]> {
    const params = new HttpParams().set("page", "1").set("pageSize", "10");

    // this.http
    //   .get("http://localhost:9100/api/courses", { params })
    //   .subscribe((val) => {
    //     console.log(val);
    //     this.courses = val;
    //   });

    return this.http.get<Course[]>(`${this.baseUrl}/courses`, {
      params,
    });
  }

  saveCourse(course: Course) {
    const headers = new HttpHeaders().set("X-Auth", "userId");

    return this.http.put(`${this.baseUrl}/courses/${course.id}`, course, {
      headers: headers,
    });
  }
}
