import { Directive } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]',
  host:{'style':'background: beige'},
  standalone:true
})
export class BackgroundColorDirective {

  constructor() { }

}
