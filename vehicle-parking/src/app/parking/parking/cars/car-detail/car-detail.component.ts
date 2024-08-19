import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../../../../models/car.model';
import { CarsService } from './../../../../services/cars.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.scss',
})
export class CarDetailComponent implements OnInit {
  car!: Observable<Car>;

  constructor(
    private carsService: CarsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.car = this.carsService.getCar(params['id']);
    });
  }
}
