import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  products: string[] = [];
  productsUpdated = new Subject();

  addProduct(product: string) {
    this.products.push(product);
    this.productsUpdated.next(this.products);
  }

  getProducts() {
    return [...this.products];
  }

  deleteProduct(productName: string) {
    this.products = this.products.filter((p) => p !== productName);
    this.productsUpdated.next(this.products);
  }
}
