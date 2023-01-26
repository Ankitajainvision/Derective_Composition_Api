import { Directive } from '@angular/core';
import { TextTransformDirective } from './texttransform.directive';

@Directive({
  selector: '[appTextcolor]',
  host:{'style':'color:blue'},
  standalone:true,
  hostDirectives:[TextTransformDirective]
})
export class TextcolorDirective {

  constructor() { }

}
