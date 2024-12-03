import {
  ActivatedRouteSnapshot,
  MaybeAsync,
  RedirectCommand,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { LessonDetail } from "../model/lesson-detail";
import { CoursesService } from "./courses.service";
import { Injectable } from "@angular/core";

@Injectable()
export class LessonDetailResolver implements Resolve<LessonDetail> {
  constructor(private courses: CoursesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<LessonDetail | RedirectCommand> {
    const courseUrl = route.parent.paramMap.get("courseUrl");

    const lessonSeqNo = route.paramMap.get("lessonSeqNo");

    return this.courses.loadLessonDetail(courseUrl, lessonSeqNo);
  }
}
