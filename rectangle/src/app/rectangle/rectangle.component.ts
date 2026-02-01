import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Rectangle } from './rectangle.model';

@Component({
  selector: 'app-rectangle',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './rectangle.component.html',
  styleUrl: './rectangle.component.scss'
})
export class RectangleComponent {
rectangleWidth: number = 200;
rectangleHeight: number = 100;
data = output<Rectangle>();

  updateRectangle(): void {
    this.data.emit({
      width: this.rectangleWidth,
      height: this.rectangleHeight
    });
  }
}