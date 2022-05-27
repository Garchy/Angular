import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  portalName: string;

  pokemons: string[] = ['Charmander','Squirtle', 'Bulbassaur'];
  
  constructor() {
    this.portalName = 'http://gabryel.pokemons';
  }
}
