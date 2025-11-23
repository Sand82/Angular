
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Planet } from '../../../models/planet';

@Component({
  selector: 'app-planet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planet.component.html',
  styleUrl: './planet.component.scss'
})
export class PlanetComponent {
  @Input() planet!: Planet;
}
