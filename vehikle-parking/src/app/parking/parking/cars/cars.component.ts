import { Component, OnInit } from '@angular/core';
import { Car } from '../../../models/car.model';
import { CarsService } from '../../../services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss',
})
export class CarsComponent implements OnInit {
  cars!: Car[];

  constructor(private carsService: CarsService) {}

  ngOnInit(): void {
    this.carsService.getCars().subscribe((x) => (this.cars = x));
  }
}
