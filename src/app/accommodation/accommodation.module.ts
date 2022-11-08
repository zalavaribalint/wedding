import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccommodationComponent } from './accommodation.component';
import { AccommodationRoutingModule } from './accommodation-routing.module';
import { SimpleBlockModule } from '@shared/components/simple-block';
import { MatIconModule } from '@angular/material/icon';
import { SplitBlockModule } from '@shared/components/split-block';

@NgModule({
  declarations: [AccommodationComponent],
  imports: [CommonModule, AccommodationRoutingModule, SimpleBlockModule, MatIconModule, SplitBlockModule],
})
export class AccommodationModule {}
