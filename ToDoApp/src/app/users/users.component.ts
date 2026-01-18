import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_USERS } from '../data/users';
import { UserComponent } from './user/user.component';
import { User } from '../models/User';
import { TODO_TASKS } from '../data/tasks';
import { Task } from '../models/Tasks';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, UserComponent, TaskComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  users = APP_USERS;
  selectedUser: User | null = null;
  userTasks : Task[] = [];

  onUserSelected(user: User): void {    
    this.selectedUser = user;
    this.userTasks = TODO_TASKS.filter(u => u.userId === user.id);
  }
}
