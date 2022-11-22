import { NgModule } from '@angular/core';
import { ElementVisibleDirective } from '@shared/directives/element-visible.directive';

@NgModule({
  declarations: [ElementVisibleDirective],
  exports: [ElementVisibleDirective],
})
export class DirectivesModule {}
