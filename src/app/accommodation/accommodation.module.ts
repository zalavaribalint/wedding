import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccommodationComponent } from './accommodation.component';
import { AccommodationRoutingModule } from './accommodation-routing.module';
import { SimpleBlockModule } from '@shared/components/simple-block';
import { MatIconModule } from '@angular/material/icon';
import { SplitBlockModule } from '@shared/components/split-block';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [AccommodationComponent],
  imports: [
    CommonModule,
    AccommodationRoutingModule,
    SimpleBlockModule,
    MatIconModule,
    SplitBlockModule,
    TranslateModule,
  ],
})
export class AccommodationModule {}
