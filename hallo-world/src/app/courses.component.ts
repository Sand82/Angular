import { Component } from '@angular/core';
import { CoursesService } from './course/courses.service';

@Component({
  selector: 'courses',
  template: `
    <h2 [style.backgroundColor]="isActive ? 'blue' : 'red'">
      {{ 'Title: ' + getTitle() }}
    </h2>
    <h3>Welcome : {{ inputValue }}</h3>
    {{ text | summery : 10 }}
    <ul>
      <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
    <!-- <input (keyup.enter)="onKeyUp($event)" /> -->
    <!-- <input #input (keyup.enter)="onKeyUp(input.value)" /> -->
    <input [(ngModel)]="inputValue" (keyup.enter)="onKeyUp()" />
    <table>
      <div (click)="onClickDiv()">
        <button
          class="btn btn-primary"
          [class.active]="isActive"
          (click)="onSave($event)"
        >
          Save
        </button>
      </div>
      {{
        course.title | uppercase
      }}
      <br />
      {{
        course.students | number
      }}
      <br />
      {{
        course.rating | number : '1.2-2'
      }}
      <br />
      {{
        course.price | currency : 'BGN' : true : '3.3-3'
      }}
      <br />
      {{
        course.relaseDate | date : 'shortDate'
      }}
      <br />
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
  isActive = true;
  inputValue: any;
  text = 'Very long long long long text';

  course = {
    title: 'The Complite Angular Course',
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    relaseDate: new Date(2016, 3, 1),
  };

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  onKeyUp() {}

  onSave($event: any) {
    $event.stopPropagation();
    console.log('Clicked from button!!!', $event);
    this.isActive = !this.isActive;
  }

  onClickDiv() {
    console.log('Clicked from div!!!');
  }

  getTitle() {
    return this.title;
  }
}
