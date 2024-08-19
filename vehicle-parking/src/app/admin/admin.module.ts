import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AdminParkingComponent } from './admin-parking/admin-parking.component';
import { CarsService } from '../services/cars.service';
import { MotorbikeService } from '../services/motorbike.service';

const routes: Routes = [{ path: '', component: AdminParkingComponent }];

@NgModule({
  declarations: [AdminParkingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [CarsService, MotorbikeService],
})
export class AdminModule {}
