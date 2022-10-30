import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ChurchWeddingComponent} from "./church-wedding/church-wedding.component";
import {CivilWeddingComponent} from "./civil-wedding/civil-wedding.component";
import {AccommodationComponent} from "./accommodation/accommodation.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'church-wedding', component: ChurchWeddingComponent },
  { path: 'civil-wedding', component: CivilWeddingComponent },
  { path: 'accommodation', component: AccommodationComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
