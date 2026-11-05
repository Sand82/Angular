import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { UserData } from '../../Data/contracts';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  standalone: true,
  styleUrls: ['./user.component.css'],
  imports: [NgClass],
})
export class UserComponent {
  @Input() gender?: string;
  @Input() userData?: UserData;

  maleImageLink: string =
    'https://cdn.vectorstock.com/i/1000v/35/62/person-icon-male-user-profile-avatar-vector-18833562.jpg';

  femaleImageLink: string =
    'https://www.nicepng.com/png/detail/207-2074651_png-file-woman-person-icon-png.png';

  setAge(): void {
    this.userData!.age = 30;
  }
}
