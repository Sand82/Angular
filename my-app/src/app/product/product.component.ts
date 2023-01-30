import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input()
  productName: string = '';

  @Output()
  productCliked = new EventEmitter();

  constructor(private productsService: ProductServiceService) {}

  ngOnInit(): void {}

  onClicked() {
    this.productsService.deleteProduct(this.productName);
  }
}
