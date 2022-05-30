import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-customs',
  templateUrl: './directives-customs.component.html',
  styleUrls: ['./directives-customs.component.scss']
})
export class DirectivesCustomsComponent implements OnInit {

  pokemons: string[] = ['Charmander'];

  showPokemons: boolean = false;

  onShowPokemons = () => this.showPokemons = !this.showPokemons;

  constructor() { }

  ngOnInit(): void {
  }

}
