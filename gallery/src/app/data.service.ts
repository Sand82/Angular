import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offer } from './offer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = "http://localhost:3000/data";

  constructor(private http: HttpClient) { }  

  getData(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.url);
  }
}
