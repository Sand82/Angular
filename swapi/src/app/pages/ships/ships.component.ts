import { Component, inject } from '@angular/core';
import { ShipsService } from './ships.service';
import { CommonModule } from '@angular/common';
import { ShipComponent } from './ship/ship.component';

@Component({
  selector: 'app-ships',
  standalone: true,
  imports: [CommonModule, ShipComponent],
  templateUrl: './ships.component.html',
  styleUrl: './ships.component.scss'
})
export class ShipsComponent {
  private readonly shipsService = inject(ShipsService);

  ships$ = this.shipsService.getShips();
}
