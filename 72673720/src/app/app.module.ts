import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ExcludeMailToDirective } from './exclude-mail-to.directive';

@NgModule({
  imports: [BrowserModule, FormsModule, ExcludeMailToDirective],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
