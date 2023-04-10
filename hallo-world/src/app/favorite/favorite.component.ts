import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  @Input('is-favorite')
  isFavorite!: boolean;

  @Output('change')
  change = new EventEmitter();

  starClass: string = 'bi';

  onRate() {
    this.isFavorite = !this.isFavorite;
    this.onGetStarState(this.isFavorite);
    this.change.emit({ newValue: this.isFavorite });
  }

  onGetStarState(isFavorite: boolean) {
    return (this.starClass = isFavorite ? 'bi bi-star-fill' : 'bi bi-star');
  }

  ngOnInit(): void {
    this.starClass = this.onGetStarState(this.isFavorite);
  }
}

export interface FacoriteChangedEventArgs {
  newValue: boolean;
}
