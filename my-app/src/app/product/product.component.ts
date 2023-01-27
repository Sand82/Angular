import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

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

  ngOnInit(): void {}

  onClicked() {
    this.productCliked.emit();
  }
}
