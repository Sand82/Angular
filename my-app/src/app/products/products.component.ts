import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productName = '';
  IsDesabled = true;

  products: string[] = [];

  constructor(private productsService: ProductServiceService) {
    setTimeout(() => {
      this.IsDesabled = false;
    }, 3000);
  }
  ngOnInit(): void {
    this.productsService.productsUpdated.subscribe(() => {
      this.products = this.productsService.getProducts();
    });
  }

  onAddProduct(form: NgForm) {
    if (form.valid) {
      this.productsService.addProduct(form.value.productName);
    }
  }

  onRemoveProduct(productName: string) {
    this.products = this.products.filter((x) => x !== productName);
  }
}
