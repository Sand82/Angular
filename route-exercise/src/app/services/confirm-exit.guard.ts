import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  GuardResult,
  MaybeAsync,
  RouterStateSnapshot,
} from "@angular/router";
import { CourseComponent } from "../courses/course/course.component";
import { Injectable } from "@angular/core";

@Injectable()
export class ConfirmExitGuard implements CanDeactivate<CourseComponent> {
  canDeactivate(
    component: CourseComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): boolean {
    return component.confirmExit();
  }
}