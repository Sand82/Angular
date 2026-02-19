import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit {
  
  private placesService = inject(PlacesService);
  private destroyRef = inject(DestroyRef);

  isFeching = signal(false);
  error = signal('');
  places = this.placesService.loadedUserPlaces;

  ngOnInit(): void {
    this.isFeching.set(true);
      const subscription = this.placesService.loadUserPlaces()
      .subscribe({            
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

  onRemovePlace(place: Place) {
    const subscription = this.placesService.removeUserPlace(place).subscribe();

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
  }
}
