import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  productName = 'A book';
  IsDesabled = true;

  products = ['A book', 'A tree'];

  constructor() {
    setTimeout(() => {
      this.IsDesabled = false;
    }, 3000);
  }

  onAddProduct() {
    this.products.push(this.productName);
  }

  onRemoveProduct(productName: string) {
    this.products = this.products.filter((x) => x !== productName);
  }
}
