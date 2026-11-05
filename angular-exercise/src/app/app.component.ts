import { Component, inject } from '@angular/core';
import { UserComponent } from './Components/UserComponent/user.component';
import { TaskData } from './Data/contracts';
import { UserService } from './Services/userService';
import {
  BehaviorSubject,
  combineLatest,
  debounceTime,
  map,
  Observable,
} from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { TasksComponent } from './Components/Tasks/tasks.component';
import { FormsModule } from '@angular/forms';
import { TaskService } from './Services/taskService';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [UserComponent, AsyncPipe, TasksComponent, FormsModule],
})
export class AppComponent {
  private taskService = inject(TaskService);
  private userService = inject(UserService);
  private taskFilterSubject = new BehaviorSubject('');
  private titleFilterSubject = new BehaviorSubject('');
  users$ = this.userService.getUsers();

  titleFilter = '';
  taskFilter = '';

  filteredTasks$: Observable<TaskData[]> = combineLatest([
    this.taskService.getTasks(),
    this.taskFilterSubject,
    this.titleFilterSubject.pipe(debounceTime(300)),
  ]).pipe(
    map(([tasks, taskFilter, titleFilter]) => {
      const normalizedTitleFilter = titleFilter.trim().toLowerCase();

      return tasks.filter((task) => {
        const matchesTaskFilter =
          taskFilter === 'completed'
            ? task.completed
            : taskFilter === 'not completed'
              ? !task.completed
              : true;
        const matchesTitle =
          normalizedTitleFilter === '' ||
          task.title.toLowerCase().includes(normalizedTitleFilter);

        return matchesTaskFilter && matchesTitle;
      });
    }),
  );

  onTaskFilterChange(taskFilter: string): void {
    this.taskFilter = taskFilter;
    this.taskFilterSubject.next(taskFilter);
  }

  onTitleFilterChange(titleFilter: string): void {
    this.titleFilter = titleFilter;
    this.titleFilterSubject.next(titleFilter);
  }
}
