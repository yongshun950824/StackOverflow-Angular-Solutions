import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ModalComponent } from './modal/modal.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { InfiniteScrollTriggerDirective } from './infinite-scroll-trigger.directive';

declare const chance;

@NgModule({
  declarations: [ AppComponent, HelloComponent, ModalComponent, InfiniteScrollTriggerDirective ],
  imports:      [ BrowserModule, FormsModule, InfiniteScrollModule ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
