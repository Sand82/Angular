import { Component } from '@angular/core';

@Component({
  selector: 'star',
  template: `
    <div (click)="onRate()">
      <i [class]="starClass"></i>
    </div>
  `,
})
export class StarComponent {
  isRaed = false;
  starClass = 'bi bi-star';

  onRate() {
    this.isRaed = !this.isRaed;
    this.starClass = this.isRaed ? 'bi-star-fill' : 'bi bi-star';
  }
}
