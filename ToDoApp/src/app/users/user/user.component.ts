import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/User';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input() user!: User;
  @Output() selected = new EventEmitter<User>();

  onSelect() : void {    
    this.selected.emit(this.user);
  }
}

 