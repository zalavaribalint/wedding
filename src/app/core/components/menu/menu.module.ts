import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLinkWithHref } from '@angular/router';

@NgModule({
  declarations: [MenuComponent],
  imports: [MatIconModule, MatButtonModule, MatMenuModule, TranslateModule, RouterLinkWithHref],
  exports: [MenuComponent],
})
export class MenuModule {}
