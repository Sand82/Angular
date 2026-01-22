import { Component, inject, Input } from '@angular/core';
import { Task } from '../../models/Tasks';
import { UserManagementService } from '../user-management.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input() task! : Task;
   private readonly userManagementService = inject(UserManagementService);

  onTaskCompleted(): void {
    this.userManagementService.removeTask(this.task.id);
  }
}
