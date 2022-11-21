import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChurchWeddingComponent } from './church-wedding.component';
import { ChurchWeddingRoutingModule } from './church-wedding-routing.module';
import { SimpleBlockModule } from '@shared/components/simple-block';
import { SplitBlockModule } from '@shared/components/split-block';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ChurchWeddingComponent],
  imports: [CommonModule, ChurchWeddingRoutingModule, SimpleBlockModule, SplitBlockModule, TranslateModule],
})
export class ChurchWeddingModule {}
