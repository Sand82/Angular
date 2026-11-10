import { Component, inject, Input } from '@angular/core';
import { UserComponent } from './User/user.component';
import { AsyncPipe } from '@angular/common';
import { UserService } from '../../Services/userService';
import { RouterLink } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  imports: [UserComponent, AsyncPipe, RouterLink],
  standalone: true,
})
export class UsersComponent {
  private userService = inject(UserService);
  users$ = this.userService.getUsers();

  deleteUserCallback(userId: string): void{
    if (userId !== undefined && userId !== null) {
      this.userService.deleteUser(userId).subscribe({
        next: () => {
          console.log('User deleted successfully');
          this.users$ = this.users$
            .pipe(
              map(users => users
              .filter(user => user.id !== userId)));
        },
        error: (error) => console.error('Failed to delete user:', error),
      });
    }
  }
}

