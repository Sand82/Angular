import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class AddUserComponent {
  userForm = new FormGroup({
    userName: new FormControl(''),
    age: new FormControl(1),
    gender: new FormControl(''),
  });

  AddUserHandler() {
    console.log(this.userForm.value);
  }
}
