import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CarsService } from './../services/cars.service';
import { ParkingComponent } from './parking/parking.component';
import { CarsComponent } from './parking/cars/cars.component';
import { MotorBikesComponent } from './parking/motor-bikes/motor-bikes.component';
import { CarComponent } from './parking/cars/car/car.component';
import { MotorBikeComponent } from './parking/motor-bikes/motor-bike/motor-bike.component';
import { MotorbikeService } from '../services/motorbike.service';
import { CarDetailComponent } from './parking/cars/car-detail/car-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ParkingComponent,
    children: [
      { path: 'cars', component: CarsComponent },
      { path: 'cars/:id', component: CarDetailComponent },
      { path: 'motor-bikes', component: MotorBikesComponent },
    ],
  },
];

@NgModule({
  declarations: [
    ParkingComponent,
    CarComponent,
    CarsComponent,
    MotorBikesComponent,
    MotorBikeComponent,
    CarDetailComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), HttpClientModule],
  providers: [CarsService, MotorbikeService],
})
export class ParkingModule {}
