import { Routes } from '@angular/router';
import { TasksComponent } from './Components/Tasks/tasks.component';
import { UsersComponent } from './Components/Users/users.component';
import { HomeComponent } from './Pages/home.component';

export const routes: Routes = [
    
    {
        path: '', component: HomeComponent
    },
    {
        path: 'tasks', component: TasksComponent
    },
    {
        path: 'users', component: UsersComponent
    }
];
