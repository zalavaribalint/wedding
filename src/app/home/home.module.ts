import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HomeComponent } from './home.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { CommonModule } from '@angular/common';
import { SimpleBlockModule } from '@shared/components/simple-block';
import { SplitBlockModule } from '@shared/components/split-block';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, TranslateModule, NgImageSliderModule, SimpleBlockModule, SplitBlockModule],
  exports: [HomeComponent],
})
export class HomeModule {}
