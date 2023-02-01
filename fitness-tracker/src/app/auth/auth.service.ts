import { AuthData } from './outh-data.model';
import { User } from './user.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private user: User | null = null;

  constructor(private router: Router) {}

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString(),
    };

    this.authSuccessfuly();
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString(),
    };

    this.authSuccessfuly();
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/logout']);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    if (this.user) {
      return true;
    }

    return false;
  }

  authSuccessfuly() {
    this.authChange.next(true);
    this.router.navigate(['/training']);
  }
}
