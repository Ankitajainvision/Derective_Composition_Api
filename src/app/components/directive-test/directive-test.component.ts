import { Component } from '@angular/core';
import { BackgroundColorDirective } from 'src/app/directives/background-color.directive';
import { StyleDirective } from 'src/app/directives/style.directive';
import { TextcolorDirective } from 'src/app/directives/textcolor.directive';
import { TextTransformDirective } from 'src/app/directives/texttransform.directive';

@Component({
  selector: 'app-directive-test',
  templateUrl: './directive-test.component.html',
  styleUrls: ['./directive-test.component.scss'],
  // hostDirectives: [TextcolorDirective,TextTransformDirective,BackgroundColorDirective], // using multiple directive in single hostDirective 
  hostDirectives:[StyleDirective]
})
export class DirectiveTestComponent {}
