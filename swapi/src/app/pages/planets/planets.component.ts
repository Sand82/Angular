import { Component, inject } from '@angular/core';
import { PlanetsService } from './planets.service';
import { PlanetComponent } from './planet/planet.component';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-planets',
  standalone: true,
  imports: [CommonModule, PlanetComponent, AsyncPipe],
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.scss'
})
export class PlanetsComponent {

  private readonly planetsService = inject(PlanetsService);

  planets$ = this.planetsService.getPlanets();
}
