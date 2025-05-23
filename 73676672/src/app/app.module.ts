import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NoSpecialCharacterOnlyDirective } from './no-special-character.directive';
import { NoWhitespaceDirective } from './no-whitespace.directive';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    NoSpecialCharacterOnlyDirective,
    NoWhitespaceDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
