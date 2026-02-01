import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RectangleComponent } from './rectangle/rectangle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RectangleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  rectangleWidth: number = 200;
  rectangleHeight: number = 100;  

  onRectangleData(event: { width: number; height: number }): void {
    this.rectangleWidth = event.width;
    this.rectangleHeight = event.height;
  }
}
