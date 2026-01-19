import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_USERS } from '../data/users';
import { UserComponent } from './user/user.component';
import { User } from '../models/User';
import { TODO_TASKS } from '../data/tasks';
import { Task } from '../models/Tasks';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';

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
  userTasks : Task[] = [];
  openAddTaskModal: boolean = false;

  onUserSelected(user: User): void {    
    this.selectedUser = user;
    this.userTasks = TODO_TASKS.filter(u => u.userId === user.id);
  }

  onTaskCreated(task: Task): void {
    this.userTasks.unshift(task);
  }

  onTaskCompleted(taskId: string): void {
    this.userTasks = this.userTasks.filter(t => t.id !== taskId);
  }

  onOpenModal(): void {
    this.openAddTaskModal = true;
  }

  onCloseModal(event : boolean): void {
    this.openAddTaskModal = event;
  }
}
