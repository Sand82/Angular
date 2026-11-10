import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserData } from '../Data/contracts';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3001/users';
  private usersSubject = new BehaviorSubject<UserData[]>([]);

  getUsers(): Observable<UserData[]> {
    this.http.get<UserData[]>(this.apiUrl).subscribe({
      next: (users) => this.usersSubject.next(users),
      error: (error) => console.error('Failed to fetch users:', error),
    });

    return this.usersSubject.asObservable();
  }

  getUserById(userId: string): Observable<UserData | undefined> {
    return this.usersSubject.asObservable().pipe(
      map((users) => users.find((user) => user.id === userId))
    );
  }

  addUser(user: UserData): Observable<UserData> {
    return this.http.post<UserData>(this.apiUrl, user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }).pipe(
      tap(() => console.log(`User added: ${user.userName}`))
    );
  }

  updateUser(userId: string, user: UserData): Observable<UserData> {
    return this.http.put<UserData>(`${this.apiUrl}/${userId}`, user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }).pipe(
      tap(() => console.log(`User updated: ${user.userName}`))
    );
  }

  deleteUser(userId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${userId}`);
  }
}
