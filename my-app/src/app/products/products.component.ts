import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductServiceService } from '../services/product-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  productName = '';
  IsDesabled = true;
  products: string[] = [];
  private productSubscription: Subscription | null = null;

  constructor(private productsService: ProductServiceService) {
    setTimeout(() => {
      this.IsDesabled = false;
    }, 3000);
  }

  ngOnInit(): void {
    this.productSubscription = this.productsService.productsUpdated.subscribe(
      () => {
        this.products = this.productsService.getProducts();
      }
    );
  }

  ngOnDestroy(): void {
    if (this.productSubscription) {
      this.productSubscription.unsubscribe();
    }
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
