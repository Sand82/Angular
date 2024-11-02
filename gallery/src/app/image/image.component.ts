import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Offer } from '../offer.model';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss'
})
export class ImageComponent {
  @Input()
  offer! : Offer;

  @Input()
  styleClass! : string;
 
  @Output()
  changePhoto = new EventEmitter<string>();

  changeImage(id: number) {
    this.changePhoto.emit(id.toString());
  }
}
