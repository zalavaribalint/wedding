import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CivilWeddingComponent } from './civil-wedding.component';
import { CivilWeddingRoutingModule } from './civil-wedding-routing.module';
import { SimpleBlockModule } from '@shared/components/simple-block';
import { SplitBlockModule } from '@shared/components/split-block';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [CivilWeddingComponent],
  imports: [CommonModule, CivilWeddingRoutingModule, SimpleBlockModule, SplitBlockModule, TranslateModule],
})
export class CivilWeddingModule {}
