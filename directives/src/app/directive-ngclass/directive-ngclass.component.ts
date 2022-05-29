import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ngclass',
  templateUrl: './directive-ngclass.component.html',
  styleUrls: ['./directive-ngclass.component.scss']
})
export class DirectiveNgclassComponent implements OnInit {

  favorite: boolean = false;

  onClick = () => this.favorite = !this.favorite;

  constructor() { }

  ngOnInit(): void {
  }

}
