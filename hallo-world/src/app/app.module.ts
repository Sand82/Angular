import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './course/courses.service';
import { SummeryPipe } from './summery.pipe';
import { StarComponent } from './star/star.component';
import { TitleComponent } from './title/title.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummeryPipe,
    AppComponent,
    StarComponent,
    TitleComponent,
    FavoriteComponent,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
