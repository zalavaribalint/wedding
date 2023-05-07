import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImageSliderDataResolver } from '@core/resolver';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    resolve: {
      imageSliderData: ImageSliderDataResolver,
    },
  },
  {
    path: 'church-wedding',
    loadChildren: () => import('./church-wedding/church-wedding.module').then((m) => m.ChurchWeddingModule),
  },
  {
    path: 'civil-wedding',
    loadChildren: () => import('./civil-wedding/civil-wedding.module').then((m) => m.CivilWeddingModule),
  },
  {
    path: 'accommodation',
    loadChildren: () => import('./accommodation/accommodation.module').then((m) => m.AccommodationModule),
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then((m) => m.GalleryModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
