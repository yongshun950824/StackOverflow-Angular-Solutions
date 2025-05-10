import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { NgxDatatableModule } from '@tusharghoshbd/ngx-datatable';
import { BasicComponent } from './basic/basic.component';
import { PinTabComponent } from './pin-tab/pin-tab.component';
import { CellTemplateComponent } from './cell-template/cell-template.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { AppService } from './app.service';
import { SiteInfoComponent } from './site-info/site-info.component';
import { SiteInfoService } from './site-info.service';
@NgModule({
  imports:      [ BrowserModule, FormsModule, NgxDatatableModule,     HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, BasicComponent, PinTabComponent, CellTemplateComponent, CheckboxComponent, SiteInfoComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AppService, SiteInfoService]
})
export class AppModule { }
