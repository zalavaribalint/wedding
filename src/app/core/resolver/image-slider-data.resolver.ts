import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ImageSliderData } from '@core/types';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { shuffle } from '@util/array';
import { ConfigService } from '@core/services';

@Injectable({ providedIn: 'root' })
export class ImageSliderDataResolver implements Resolve<ImageSliderData[]> {
  constructor(private readonly configService: ConfigService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ImageSliderData[]> | Promise<ImageSliderData[]> | ImageSliderData[] {
    return this.configService.getImageConfig().pipe(map((imageConfig) => shuffle(imageConfig.images)));
  }
}
