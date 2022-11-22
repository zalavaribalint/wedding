import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('hu');
    const langCode = navigator.language?.split('-')?.[0];
    if (langCode) {
      translate.use(langCode);
    }
  }
}
