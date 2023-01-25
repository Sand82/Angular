import { outputAst } from "@angular/compiler";
import {
  AfterViewInit,
  Component,
  Input,
  ViewChild,
  OnInit,
  ContentChild,
  AfterContentInit,
  Output,
  EventEmitter,
  ElementRef,
  ContentChildren,
  QueryList,
  TemplateRef,
} from "@angular/core";
import { Course } from "../model/course";
import { CourseImageComponent } from "../course-image/course-image.component";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent
  implements OnInit, AfterViewInit, AfterContentInit
{
  @Input()
  course: Course;

  @Input("src")
  imageUrl: string;

  @Input()
  noImageTpl: TemplateRef<any>;

  @Output()
  courseSelected = new EventEmitter<Course>();

  // @ContentChild(CourseImageComponent, { read: ElementRef })
  // image: CourseImageComponent;

  @ContentChildren(CourseImageComponent, { read: ElementRef })
  images: QueryList<ElementRef>;

  constructor() {}

  ngAfterContentInit(): void {
    console.log(this.images);
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    //console.log(this.images);
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {
    this.courseSelected.emit(this.course);
  }
}
