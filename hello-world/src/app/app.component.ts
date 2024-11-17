import { Component } from '@angular/core';
import { FacoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hallo-world';
  post = {
    title: 'Title',
    isFavorite: true,
  };

  like = {
    body: 'Here is the body of a tweet...',
    isLiked: false,
    likesCount: 0,
  };

  courses = [
    { id: 1, name: 'course1' },
    { id: 1, name: 'course2' },
    { id: 3, name: 'course3' },
  ];

  canSave = false;

  viewMode = 'map';

  task = {
    title: 'Review applications',
    assignee: {
      name: 'John Smith',
    },
  };

  changeViewMode(value: string) {
    this.viewMode = value;
  }

  onFavoriteChange(evenArgs: FacoriteChangedEventArgs) {
    console.log(evenArgs.newValue);
  }

  onAdd() {
    let count = this.courses.length + 1;
    this.courses.push({ id: count, name: 'course' + count });
  }

  onRemove(id: number) {
    this.courses = this.courses.filter((x) => x.id != id);
  }
}
