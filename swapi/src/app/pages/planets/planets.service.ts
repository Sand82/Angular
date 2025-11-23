import { inject, Injectable } from '@angular/core';
import { DbService } from '../../shared/db.service';
import { planetsUrl } from '../../constants/endPoints';
import { Planet, PlanetResult } from '../../models/planet';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  private readonly dbService = inject(DbService);

  getPlanets(): Observable<Planet[]> {
    return this.dbService.getItems<PlanetResult>(planetsUrl)
      .pipe(
        map((planetResult) => planetResult.results)
      );
  }
}
