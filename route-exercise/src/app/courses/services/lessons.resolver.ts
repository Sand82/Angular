import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  MaybeAsync,
  RedirectCommand,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { LessonSummary } from "../model/lesson-summary";
import { CoursesService } from "./courses.service";

@Injectable()
export class LessonsResolver implements Resolve<LessonSummary[]> {
  constructor(private course: CoursesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<LessonSummary[] | RedirectCommand> {
    const courseUrl = route.paramMap.get("courseUrl");

    return this.course.loadAllCourseLessonsSummary(courseUrl);
  }
}
