import { Injectable } from "@angular/core";
import { AuthStore } from "./auth.store";

import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { map } from "rxjs/operators";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private auth: AuthStore, private router: Router) {}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    return this.checkIfAuthenticated();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    return this.checkIfAuthenticated();
  }

  private checkIfAuthenticated() {
    return this.auth.isLoggedIn$.pipe(
      map((loggedIn) => (loggedIn ? true : this.router.parseUrl("/login")))
    );
  }
}
