import { Directive } from '@angular/core';
import { TextcolorDirective } from './textcolor.directive';

@Directive({
  selector: '[appTstyle]',
  standalone:true,
  hostDirectives:[TextcolorDirective]
})
export class StyleDirective {

  constructor() { }

}
