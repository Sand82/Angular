import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private readonly client = inject(HttpClient);

  getItems<T>(url: string) {
    return this.client.get<T>(url);
  }
}
