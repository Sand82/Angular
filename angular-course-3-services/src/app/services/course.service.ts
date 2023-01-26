import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "../model/course";

@Injectable()
export class CourseService {
  constructor(private http: HttpClient) {}

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
