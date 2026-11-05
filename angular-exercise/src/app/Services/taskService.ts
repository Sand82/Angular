import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskData } from '../Data/contracts';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3001/tasks';

  getTasks(): Observable<TaskData[]> {
    return this.http.get<TaskData[]>(this.apiUrl);
  }
}
