import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AccountService } from './account.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule],
  declarations: [AppComponent],
  providers: [AccountService],
  bootstrap: [AppComponent],
})
export class AppModule {}
