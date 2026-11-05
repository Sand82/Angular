import { Component, Input } from '@angular/core';
import { TaskData } from '../../Data/contracts';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { TaskComponent } from './Task/task.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  standalone: true,
  imports: [AsyncPipe, TaskComponent],
})
export class TasksComponent {
  @Input() tasks$!: Observable<TaskData[]>;
}
