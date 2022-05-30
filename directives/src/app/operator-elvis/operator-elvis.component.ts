import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operator-elvis',
  templateUrl: './operator-elvis.component.html',
  styleUrls: ['./operator-elvis.component.scss']
})
export class OperatorElvisComponent implements OnInit {

  task: any = {
    desc: 'Task desc',
    resp: null
  };

  constructor() { }

  ngOnInit(): void {
  }

}
