import { Routes } from '@angular/router';
import { TasksComponent } from './Components/Tasks/tasks.component';
import { UsersComponent } from './Components/Users/users.component';
import { HomeComponent } from './Pages/home.component';
import { ManageUserComponent } from './Components/Users/Manage/manage-user.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'tasks',
    component: TasksComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'users/manage',
    component: ManageUserComponent,
  },
  {
    path: 'users/manage/:userId',
    component: ManageUserComponent,
  },
];
