import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CivilWeddingComponent } from './civil-wedding.component';

const routes: Routes = [{ path: '', component: CivilWeddingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CivilWeddingRoutingModule {}
