import { Directive } from '@angular/core';
import { BackgroundColorDirective } from './background-color.directive';

@Directive({
  selector: '[appTextTransform]',
  host:{'style':'text-transform: uppercase'},
  standalone:true,
  hostDirectives:[BackgroundColorDirective]
})
export class TextTransformDirective {

  constructor() { }

}
