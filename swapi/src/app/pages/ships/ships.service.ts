import { inject, Injectable } from '@angular/core';
import { shipsUrl } from '../../constants/endPoints';
import { DbService } from '../../shared/db.service';
import { StarShip } from '../../models/starShip';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  private readonly dbService = inject(DbService);

  getShips() {
    return this.dbService.getItems<Observable<StarShip[]>>(shipsUrl);
  }
}
