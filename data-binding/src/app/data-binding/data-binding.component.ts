import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'https://github.com/Garchy';
  urlImage: string = 'http://lorempixel.com.br/400/200/?1';
  currentValue: string = '';
  savedValue: string = ''
  isMouseOver: boolean = false;
  name: string = 'abc';

  courseName: string = 'Angular';

  person = {
    name: "Gab",
    age: '20'
  }

  getValue = () => 1; //Arrow Function

  angularCourse: boolean = true;
  getLikeCourse = () => true;

  buttonClicked = () => alert('Clicked!');

  onKeyUp = (event: KeyboardEvent) => this.currentValue = (<HTMLInputElement>event.target).value;

  saveValue = (value: string) => this.savedValue = value;

  onMouseOverOut = () => this.isMouseOver = !this.isMouseOver;

  constructor() { }

  ngOnInit(): void {
  }

}
