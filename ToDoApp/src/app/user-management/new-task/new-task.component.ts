import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Task } from '../../models/Tasks';
import { Guid } from 'guid-typescript';
import { UserManagementService } from '../user-management.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  @Input() userId!: string;  
  taskTitle: string = '';
  taskDescription: string = '';

  private readonly userManagementService = inject(UserManagementService);

  get closeModal() {    
    return this.userManagementService.isNewTaskModalOpen;
  }

  onClose() {
    this.userManagementService.onCloseModal();
  }

  onSubmit() {
    let id = Guid.create();
    const newTask: Task = {
      id: id.toString(),
      title: this.taskTitle,
      description: this.taskDescription,
      userId: this.userId
    };
    this.userManagementService.createdTask(newTask);    
  }
}
