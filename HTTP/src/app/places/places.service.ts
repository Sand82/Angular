import { inject, Injectable, signal } from '@angular/core';

import { Place } from './place.model';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ErrorService } from '../shared/error.service';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private userPlaces = signal<Place[]>([]);
  private httpClient = inject(HttpClient);
  private errorService = inject(ErrorService);

  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.fetchPlaces("http://localhost:3000/places", "Something went wrong!");
  }

  loadUserPlaces() : Observable<Place []> {
    return this.fetchPlaces("http://localhost:3000/user-places", "Something went wrong!").pipe(tap({
      next: (userPlaces) => { this.userPlaces.set(userPlaces)}
    }))
  }

  addPlaceToUserPlaces(place: Place) {
    const prevPlace = this.userPlaces();

    if (!prevPlace.some((p) => p.id === place.id)) {
      this.userPlaces.update(oldPlaces => [...oldPlaces, place]);
    }    

    return this.httpClient.put("http://localhost:3000/user-places", {
      placeId: place.id
    }).pipe(
      catchError((error) => {
        this.userPlaces.set(prevPlace);
        this.errorService.showError("Filed to store selected data.");
        return throwError(() => new Error("Filed to store selected data."));
      })
    )
  }

  removeUserPlace(place: Place) {
    const prevPlace = this.userPlaces();

    if (prevPlace.some((p) => p.id === place.id)) {
      this.userPlaces.set(prevPlace.filter(x => x.id !== place.id));
    } 
    
    return this.httpClient.delete(`http://localhost:3000/user-places/${place.id}`)
    .pipe(
      catchError((error) => {
        this.userPlaces.set(prevPlace);
        this.errorService.showError("Filed to remove the selected data.");
        return  throwError(() => new Error("Filed to remove the selected data."))
      })
    )
  }

  private fetchPlaces(url: string, errorMassage: string): Observable<Place[]>{
    return this.httpClient
      .get<{places: Place[]}>(url)
      .pipe(
        map((resData: any) => resData.places),
        catchError((err, obs) => {
          console.log(err);
          return throwError(
            () => new Error(errorMassage

          )
        );
      })
    )
  }
}
