import { Component, Input } from '@angular/core';
import { Car } from '../../../../models/car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.scss',
})
export class CarComponent {
  @Input() car!: Car;
}
