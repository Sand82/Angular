import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_USERS } from '../data/users';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, UserComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  users = APP_USERS;
}
