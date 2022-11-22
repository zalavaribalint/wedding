import { Component } from '@angular/core';
import { ImageSliderData } from '@core/types';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  readonly imageSliderData: ImageSliderData[];

  constructor(private readonly route: ActivatedRoute) {
    this.imageSliderData = route.snapshot.data['imageSliderData'];
  }
}
