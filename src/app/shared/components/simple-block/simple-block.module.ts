import { NgModule } from '@angular/core';
import { SimpleBlockComponent } from './simple-block.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SimpleBlockComponent],
  imports: [CommonModule],
  exports: [SimpleBlockComponent],
})
export class SimpleBlockModule {}
