import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  private translate: TranslateService;

  constructor(translate: TranslateService) {
    this.translate = translate;
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
