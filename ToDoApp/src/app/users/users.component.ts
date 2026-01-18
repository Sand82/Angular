import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_USERS } from '../data/users';
import { UserComponent } from './user/user.component';
import { User } from '../models/User';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, UserComponent, TasksComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  users = APP_USERS;
  selectedUser: User | null = null;

  onUserSelected(user: User): void {
    console.log('Selected user in UsersComponent:', user);
    this.selectedUser = user;
  }
}
