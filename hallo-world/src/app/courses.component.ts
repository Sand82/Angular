import { Component } from '@angular/core';
import { CoursesService } from './course/courses.service';

@Component({
  selector: 'courses',
  template: `
    <h2>{{ 'Title: ' + getTitle() }}</h2>
    <ul>
      <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
    <table>
      <tr>
        <td [attr.colspan]="colSpan"></td>
      </tr>
    </table>
    <div>
      <img [src]="imageUrl" />
    </div>
  `,
})
export class CoursesComponent {
  title = 'List of courses';
  imageUrl =
    'https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662__340.jpg';
  courses;
  colSpan = 2;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  getTitle() {
    return this.title;
  }
}
