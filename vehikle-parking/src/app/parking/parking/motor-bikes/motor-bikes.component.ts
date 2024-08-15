import { Component } from '@angular/core';
import { MotorBike } from '../../../models/motor-bike.model';
import { MotorbikeService } from '../../../services/motorbike.service';

@Component({
  selector: 'app-motor-bikes',
  templateUrl: './motor-bikes.component.html',
  styleUrl: './motor-bikes.component.scss',
})
export class MotorBikesComponent {
  motorBikes!: MotorBike[];

  constructor(private motorBikeService: MotorbikeService) {}

  ngOnInit(): void {
    this.motorBikeService
      .getMotorBikes()
      .subscribe((x) => (this.motorBikes = x));
  }
}
