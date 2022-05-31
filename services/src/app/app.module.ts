import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses/courses.service';
import { CreateCourseComponent } from './create-course/create-course.component';
import { LogService } from './shared/log.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CreateCourseComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [CoursesService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
