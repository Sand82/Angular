import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../../shared/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private httpClient = inject(HttpClient);

  getTasks() : Observable<Task[]> {
      return this.httpClient.get<Task[]>('http://localhost:3000/tasks');
  }   
}