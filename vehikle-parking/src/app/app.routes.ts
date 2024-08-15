import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'parking', loadChildren: () => import('./parking/parking.module').then(m => m.ParkingModule)}
];
