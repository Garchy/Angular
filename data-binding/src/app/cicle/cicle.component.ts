import { Component, OnInit, OnChanges, DoCheck, 
  AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-cicle',
  templateUrl: './cicle.component.html',
  styleUrls: ['./cicle.component.css']
})
export class CicleComponent implements OnInit, OnChanges, DoCheck, 
  AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy {

  @Input() initialValue: number = 10;

  constructor() {
    this.log('constructor')
   }

  ngOnInit(){
    this.log('NgOnInit')
  };

  ngOnChanges() {
    this.log('ngOnChanges')
  };

  ngDoCheck() {
    this.log('ngDoCheck')
  };

  ngAfterContentInit() {
    this.log('ngAfterContentInit')
  };

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked')
  };

  ngAfterViewInit() {
    this.log('ngAfterViewInit')
  };

  ngAfterViewChecked() {
    this.log('NgOnInit')
  };

  ngOnDestroy() {
    this.log('NgOnInit')
  };


  private log = (value: any) => console.log(value);

}
