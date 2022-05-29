import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ngif',
  templateUrl: './directive-ngif.component.html',
  styleUrls: ['./directive-ngif.component.scss']
})
export class DirectiveNgifComponent implements OnInit {

  pokemons: string[] = ['Charmander'];

  showPokemons: boolean = false;

  onShowPokemons = () => this.showPokemons = !this.showPokemons;

  constructor() { }

  ngOnInit(): void {
  }

}
