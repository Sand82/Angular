import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  url = 'http://localhost:3000/cars';

  cars!: Observable<Car[]>;

  constructor(private client: HttpClient) {
    this.cars = this.client.get<Car[]>(this.url);
  }

  getCars(): Observable<Car[]> {
    return this.cars;
  }

  getCar(id: number): Observable<Car> {
    return this.client.get<Car>(`${this.url}/${id}`);
  }

  addData(car: Car) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const response = fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(car),
      headers: headers,
    });
  }
}
