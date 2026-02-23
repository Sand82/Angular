import { Component, computed, DestroyRef, inject, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, RouterOutlet, RouterLink, ResolveFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink]
})
export class UserTasksComponent {
  userName = input.required<string>();
  message = input.required<string>();
  private activateRoute = inject(ActivatedRoute);

  // ngOnInit(): void {
  //   this.activateRoute.data.subscribe({
  //     next: data => console.log(data)
  //   })
  // }

  //userId = input.required<string>();
  // private userService = inject(UsersService);
  // private activateRoute = inject(ActivatedRoute);
  // private destroyRef = inject(DestroyRef)

  //userName = computed(() => this.userService.users.find(x => x.id === this.userId())?.name);

  // ngOnInit(): void {
  //   console.log("input data ", this.message() )
  //   const subscription =  this.activateRoute.paramMap.subscribe({
  //     next: (paramMap) => 
  //       this.userName = this.userService.users.find(u => u.id === paramMap.get('userId'))?.name || '',
  //   });

  //   this.destroyRef.onDestroy(() => subscription.unsubscribe())
  // }
}

export const resolveUserName: ResolveFn<string> = (
  activatedRoutes: ActivatedRouteSnapshot, routerState: RouterStateSnapshot
) => {
  const userService = inject(UsersService);
  const userName = userService.users.find(u => u.id === activatedRoutes.paramMap.get('userId'))?.name || '';

  return userName;
}


