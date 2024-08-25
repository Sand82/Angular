import { Component } from '@angular/core';
import { MotorBike } from '../../../models/motor-bike.model';
import { MotorbikeService } from '../../../services/motorbike.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-motor-bikes',
  templateUrl: './motor-bikes.component.html',
  styleUrl: './motor-bikes.component.scss',
})
export class MotorBikesComponent {
  motorBikes$!: Observable<MotorBike[]>;

  constructor(private motorBikeService: MotorbikeService) {}

  ngOnInit(): void {
    this.motorBikes$ = this.motorBikeService.getMotorBikes();
  }
}
