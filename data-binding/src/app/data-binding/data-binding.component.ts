import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'https://github.com/Garchy';
  urlImage: string = 'http://lorempixel.com.br/400/200/?1';

  getValue = () => 1; //Arrow Function

  angularCourse: boolean = true;
  getLikeCourse = () => true;

  constructor() { }

  ngOnInit(): void {
  }

}
