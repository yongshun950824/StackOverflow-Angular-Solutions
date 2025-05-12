import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//import { MainRoutingModule } from './main-routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition  } from '@ant-design/icons-angular';
import {
  StepBackwardOutline,
  CaretLeftOutline,
  SettingOutline
} from '@ant-design/icons-angular/icons';
import * as AllIcons from '@ant-design/icons-angular/icons';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LeftControlComponent } from './left-control/left-control.component';
import { HttpClientModule } from '@angular/common/http';
import { IconModule } from './icon.module';

const icons: IconDefinition[] = [
  StepBackwardOutline,
  CaretLeftOutline,
  SettingOutline
];

// Import all icons (not recommended by official documentation)
/*
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};

const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => {
  const i = antDesignIcons[key];
  return i;
});
*/

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NzLayoutModule,
    NzButtonModule,
    NzIconModule.forChild(icons),
    HttpClientModule
  ],
  declarations: [AppComponent, HelloComponent, LeftControlComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
