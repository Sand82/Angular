import {
  ActivatedRouteSnapshot,
  MaybeAsync,
  RedirectCommand,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Course } from "../model/course";
import { CoursesService } from "./courses.service";
import { Injectable } from "@angular/core";

@Injectable()
export class CourseResolver implements Resolve<Course> {
  constructor(private courses: CoursesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<Course | RedirectCommand> {
    const courseUrl = route.paramMap.get("courseUrl");

    return this.courses.loadCourseByUrl(courseUrl);
  }
}
