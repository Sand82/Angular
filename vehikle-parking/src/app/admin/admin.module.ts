import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminParkingComponent } from './admin-parking/admin-parking.component';

const routes: Routes = [{ path: '', component: AdminParkingComponent }];

@NgModule({
  declarations: [AdminParkingComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AdminModule {}
