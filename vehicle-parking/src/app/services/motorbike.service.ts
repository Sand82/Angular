import { Injectable } from '@angular/core';
import { MotorBike } from '../models/motor-bike.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MotorbikeService {
  url = 'http://localhost:3000/motorbikes';

  constructor(private client: HttpClient) {}

  getMotorBikes(): Observable<MotorBike[]> {
    return this.client.get<MotorBike[]>(this.url);
  }

  getMotorBike(id: number): Observable<MotorBike> {
    return this.client.get<MotorBike>(`${this.url}/${id}`);
  }

  addData(motorBike: MotorBike) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const response = fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(motorBike),
      headers: headers,
    });
  }
}
