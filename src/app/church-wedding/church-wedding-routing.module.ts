import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChurchWeddingComponent } from './church-wedding.component';

const routes: Routes = [{ path: '', component: ChurchWeddingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChurchWeddingRoutingModule {}
