import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],  
})
export class AvailablePlacesComponent implements OnInit {  
  places = signal<Place[] | undefined>(undefined);
  isFeching = signal(false);
  error = signal('');

  private placeService = inject(PlacesService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
      this.isFeching.set(true);
      const subscription = this.placeService.loadAvailablePlaces()
      .subscribe({
        next: (data) =>   {       
          this.places.set(data)   
        },
        complete : () => {
          this.isFeching.set(false);
        },
        error: (error: Error) => {
          this.error.set(error.message);
        }
      }
      
    );

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
  }

  onSelectPlace(place: Place) {
    const subscription = this.placeService.addPlaceToUserPlaces(place).subscribe({
      next: (resData)=>{
        console.log(resData);
      }
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
  }
}
