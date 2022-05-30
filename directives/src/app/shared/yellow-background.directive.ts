import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[yellowBackground]'
})
export class YellowBackgroundDirective {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    //this._elementRef.nativeElement.style.background = 'yellow';
    this._renderer.setStyle(
      _elementRef.nativeElement,
      'background-color',
      'yellow'
    )
  }
    
}
