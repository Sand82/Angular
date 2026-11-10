import { Component, inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../Services/userService';
import { FormType, UserData } from '../../../Data/contracts';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrl: './manage-user.component.css',
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class ManageUserComponent implements OnInit {
  private userService = inject(UserService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  @Input() formType: FormType = 'create';
  userId?: string | null; 

  userForm = new FormGroup({
    userName: new FormControl<string>('', [Validators.required, Validators.minLength(2)]),
    age: new FormControl<number>(5, [Validators.required, Validators.min(5)]),
    gender: new FormControl<string>('', [Validators.required]),
  });

  ngOnInit(): void {
    const routeUserId = this.route.snapshot.paramMap.get('userId');
    
    if (!routeUserId) {     
      return;
    }

    this.userId = routeUserId;
    this.formType = 'edit';

    this.userService.getUserById(routeUserId).subscribe({
      next: (user) => {
        
        if (user) {
          this.userForm.patchValue({
            userName: user.userName,
            age: user.age,
            gender: user.gender,
          });
        }
      },
      error: (error) => console.error('Failed to load user:', error),
    });
  }

  saveUserHandler(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const userName = this.userForm.value.userName?.trim();
    const age = this.userForm.value.age;
    const gender = this.userForm.value.gender;

    if (!userName || age === null || age === undefined || !gender) {
      return;
    }

    const userData: UserData = {
      userName,
      age: Number(age),
      gender,
    };

    const request$ = this.formType === 'edit' && this.userId
      ? this.userService.updateUser(this.userId, { ...userData, id: this.userId })
      : this.userService.addUser(userData);

    request$.subscribe({
      next: () => {
        this.userForm.reset({
          userName: '',
          age: 5,
          gender: '',
        });
        this.router.navigate(['/users']);
      },
      error: (error) => console.error('Failed to save user:', error),
    });
  }
}
