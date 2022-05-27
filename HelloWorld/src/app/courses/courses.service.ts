import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getPokeCourses(){
    return ['Pokemon Trainer','Gym Leader', 'Professor'];
  }
}
