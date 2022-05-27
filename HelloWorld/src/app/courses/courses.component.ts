import { Component, OnInit } from '@angular/core';

import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  portalName: string;

  pokemonCourses: string[];
  
  constructor(private coursesService: CoursesService) {
    this.portalName = 'http://gabryel.pokemons';

    this.pokemonCourses = this.coursesService.getPokeCourses();
  }
}
