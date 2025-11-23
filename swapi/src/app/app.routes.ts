import { Routes } from '@angular/router';
import { ShipsComponent } from './pages/ships/ships.component';
import { PlanetsComponent } from './pages/planets/planets.component';

export const routes: Routes = [
    { path: 'ships', component: ShipsComponent },
    { path: 'planets', component: PlanetsComponent },
    { path: '**', component: PlanetsComponent }
];
