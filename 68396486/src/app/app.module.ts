import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    //RouterModule
  ],
  declarations: [AppComponent, ProfileListComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
