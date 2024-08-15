import { MotorBike } from './../../../../models/motor-bike.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-motor-bike',
  templateUrl: './motor-bike.component.html',
  styleUrl: './motor-bike.component.scss',
})
export class MotorBikeComponent {
  @Input() motorBike!: MotorBike;
}
