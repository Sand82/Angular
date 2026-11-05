import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserData } from '../Data/contracts';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3001/users';

  getUsers(): Observable<UserData[]> {
    return this.http.get<UserData[]>(this.apiUrl);
  }
}
