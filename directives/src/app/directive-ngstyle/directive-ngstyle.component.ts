import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ngstyle',
  templateUrl: './directive-ngstyle.component.html',
  styleUrls: ['./directive-ngstyle.component.scss']
})
export class DirectiveNgstyleComponent implements OnInit {

  ativo: boolean = true;
  sizeFont: number = 20;

  onClick = () => this.ativo = !this.ativo;

  constructor() { }

  ngOnInit(): void {
  }

}
