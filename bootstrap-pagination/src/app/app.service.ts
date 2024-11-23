import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offer } from './offer.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  url = "http://localhost:3001/data";

  constructor(private http: HttpClient) { }  

  getData(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.url);
  }
}
