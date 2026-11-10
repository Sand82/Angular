import {
  Component,  
  EventEmitter,  
  inject,  
  Input,
  Output,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { UserData } from '../../../Data/contracts';
import { UserService } from '../../../Services/userService';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  standalone: true,
  styleUrls: ['./user.component.css'],
  imports: [NgClass, RouterLink],
})
export class UserComponent {
  @Input() userData?: UserData;
  @Output() deleteUser = new EventEmitter<string>();
  private userService = inject(UserService);

  maleImageLink: string =
    'https://cdn.vectorstock.com/i/1000v/35/62/person-icon-male-user-profile-avatar-vector-18833562.jpg';

  femaleImageLink: string =
    'https://www.nicepng.com/png/detail/207-2074651_png-file-woman-person-icon-png.png';

  deleteUserHandler(event: Event ): void {
    event.stopPropagation();
    this.deleteUser.emit(this.userData?.id);
  }
}
