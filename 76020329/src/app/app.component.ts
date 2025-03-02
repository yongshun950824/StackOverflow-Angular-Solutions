import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>{{ 'HOME.TITLE' | translate }}</h2>
      <label>
        {{ 'HOME.SELECT' | translate }}
        <select #langSelect (change)="translate.use(langSelect.value)">
          <option *ngFor="let lang of translate.getLangs()" [value]="lang" [selected]="lang === translate.currentLang">{{ lang }}</option>
        </select>
      </label>
    </div>
  `,
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en-US', 'fr-CA', 'zh-CN']);
    //translate.setDefaultLang('en-US');

    //const browserLang = translate.getBrowserLang();
    //translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');

    const defaultLanguage = translate.getBrowserCultureLang();
    console.log(defaultLanguage)
    translate.setDefaultLang(defaultLanguage);
  }
}
