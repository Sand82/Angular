import { Component, OnInit } from '@angular/core';
import { CustomValidators } from '../validators/year.validator';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  FormBuilder,
} from '@angular/forms';
import { Car } from '../../models/car.model';
import { CarsService } from '../../services/cars.service';
import { VehicleForm } from '../../models/vehicleForm.model';
import { MotorbikeService } from '../../services/motorbike.service';
import { MotorBike } from '../../models/motor-bike.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-parking',
  templateUrl: './admin-parking.component.html',
  styleUrl: './admin-parking.component.scss',
})
export class AdminParkingComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private carService: CarsService,
    private motorBikeService: MotorbikeService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      brand: this.formBuilder.control('', Validators.required),
      imgUrl: this.formBuilder.control('', Validators.required),
      model: this.formBuilder.control('', Validators.required),
      color: this.formBuilder.control('', Validators.required),
      description: this.formBuilder.control('', Validators.required),
      year: this.formBuilder.control(
        '',
        Validators.compose([
          CustomValidators.yearValidator as ValidatorFn,
          Validators.required,
        ])
      ),
      type: this.formBuilder.control('car'),
    });
  }

  onSubmit(vehicle: VehicleForm) {
    console.log(vehicle.type);

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

      this.router.navigate(['/parking/cars']);
    }

    if (vehicle.type.toLowerCase() === 'motorbike') {
      const data: MotorBike = {
        id: Math.random(),
        brand: vehicle.brand,
        imgUrl: vehicle.imgUrl,
        model: vehicle.model,
        color: vehicle.color,
        year: vehicle.year,
        description: vehicle.description,
      };

      this.motorBikeService.addData(data);

      this.router.navigate(['/parking/motor-bikes']);
    }
  }
}
