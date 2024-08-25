import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Car } from '../../../models/car.model';
import { CarsService } from '../../../services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss',
})
export class CarsComponent implements OnInit {
  cars$!: Observable<Car[]>;

  constructor(private carsService: CarsService) {}

  ngOnInit(): void {
    this.cars$ = this.carsService.getCars();
  }
}
