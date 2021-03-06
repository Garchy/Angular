import { ModuleWithProviders, NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CourseComponent } from './course/course.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'courses', component: CourseComponent },
  { path: 'course/:id', component: CourseDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
}
