import { inject, Injectable } from '@angular/core';
import { shipsUrl } from '../../constants/endPoints';
import { DbService } from '../../shared/db.service';
import { StarShip, StarShipResponce } from '../../models/starShip';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ShipsService {

  private readonly dbService = inject(DbService);

  getShips() : Observable<StarShip[]> {
    return this.dbService.getItems<StarShipResponce>(shipsUrl)
    .pipe(
      map((shipResponse) => shipResponse.results)
    );
  }
}
