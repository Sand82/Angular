import { Component, inject, Input } from '@angular/core';
import { TaskData } from '../../Data/contracts';
import { BehaviorSubject, combineLatest, debounceTime, map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { TaskComponent } from './Task/task.component';
import { TaskService } from '../../Services/taskService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  standalone: true,
  imports: [AsyncPipe, TaskComponent, FormsModule],
})
export class TasksComponent {
  private taskService = inject(TaskService);
  
  private taskFilterSubject = new BehaviorSubject('');
  private titleFilterSubject = new BehaviorSubject(''); 

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
