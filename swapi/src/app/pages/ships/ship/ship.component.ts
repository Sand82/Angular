import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarShip } from '../../../models/starShip';

@Component({
  selector: 'app-ship',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ship.component.html',
  styleUrl: './ship.component.scss'
})
export class ShipComponent {
  @Input() ship!: StarShip;
}
