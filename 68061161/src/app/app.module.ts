import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BlogsPutComponent } from './blogs-put/blogs-put.component';
import { MyapiService } from './services/myapi.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule
  ],
  declarations: [AppComponent, HelloComponent, BlogsPutComponent],
  bootstrap: [AppComponent],
  providers: [MyapiService]
})
export class AppModule {}
