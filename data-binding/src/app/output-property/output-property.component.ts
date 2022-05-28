import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'count',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() value: number = 0;

  @Output() valueChange = new EventEmitter();

  increment() {
    this.value++;
    this.valueChange.emit({newValue: this.value})
  } 

  decrement() {
    this.value--;
    this.valueChange.emit({newValue: this.value})
  }

  onValueChange(event: any) {
    console.log(event.valueChange);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
