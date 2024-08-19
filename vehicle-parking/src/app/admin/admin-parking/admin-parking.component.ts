import { Component, OnInit } from '@angular/core';
import { CustomValidators } from '../validators/year.validator';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Vehicle } from '../../models/vehicle.model';
import { Car } from '../../models/car.model';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-admin-parking',
  templateUrl: './admin-parking.component.html',
  styleUrl: './admin-parking.component.scss',
})
export class AdminParkingComponent implements OnInit {
  form!: FormGroup;

  constructor(private carService: CarsService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      brand: new FormControl('', Validators.required),
      imgUrl: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      year: new FormControl(
        '',
        Validators.compose([
          CustomValidators.yearValidator as ValidatorFn,
          Validators.required,
        ])
      ),
      type: new FormControl('car'),
    });
  }

  onSubmit(vehicle: any) {
    if (vehicle.type.toLowerCase() === 'car') {
      const data: Car = {
        id: Math.random(),
        brand: vehicle.brand,
        imgUrl: vehicle.imgUrl,
        model: vehicle.model,
        color: vehicle.color,
        year: vehicle.year,
        description: vehicle.description,
      };

      this.carService.addData(data);
    }
  }
}
