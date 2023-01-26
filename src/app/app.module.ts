import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextcolorDirective } from './directives/textcolor.directive';
import { DirectiveTestComponent } from './components/directive-test/directive-test.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
