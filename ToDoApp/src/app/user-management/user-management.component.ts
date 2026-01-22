import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_USERS } from '../data/users';
import { UserComponent } from './user/user.component';
import { User } from '../models/User';
import { Task } from '../models/Tasks';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { UserManagementService } from './user-management.service';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, UserComponent, TaskComponent, NewTaskComponent],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent {
  users = APP_USERS;
  selectedUser: User | null = null;    

  private readonly userManagementService = inject(UserManagementService);  

  get userTasks(): Task[] {
    if (this.selectedUser) {
      return this.userManagementService.getTasksByUserId(this.selectedUser.id);
    }
    return [];
  }

  get openAddTaskModal(): boolean {
    return this.userManagementService.isNewTaskModalOpen; 
  } 

  onUserSelected(user: User): void {    
    this.selectedUser = user;    
  }

  onOpenModal(): void {
    this.userManagementService.onOpenModal();
  }
}
