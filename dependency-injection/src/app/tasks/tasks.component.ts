import { Component, inject } from '@angular/core';

import { NewTaskComponent } from './new-task/new-task.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
//import { TaskService } from './new-task/task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  imports: [NewTaskComponent, TasksListComponent],
  //providers : [TaskService]  
})
export class TasksComponent {
  
}
