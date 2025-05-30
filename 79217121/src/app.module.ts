import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
//import { AppRoutingModule } from './app-routing.module';
import { ChildComponent } from './component/child/child.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, ChildComponent],
  imports: [BrowserModule /*AppRoutingModule*/],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
