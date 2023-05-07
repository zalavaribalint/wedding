import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { InitDetail } from "lightgallery/lg-events";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent {

  settings = {
    counter: false,
    plugins: [lgZoom],
  };
  onInit = (detail: InitDetail): void => {
    detail.instance.openGallery();
  };

}
