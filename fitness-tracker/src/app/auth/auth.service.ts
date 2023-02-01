import { AuthData } from './outh-data.model';
import { User } from './user.model';

export class AuthService {
  private user: User;

  constructor() {
    this.user = {
      email: '',
      userId: '',
    };
  }

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString(),
    };
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString(),
    };
  }

  logout() {
    this.user = {
      email: '',
      userId: '',
    };
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user.userId !== '';
  }
}
