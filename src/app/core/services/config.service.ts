import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImageConfig } from '@core/types';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  constructor(private readonly httpClient: HttpClient) {}

  /**
   * Download image config json.
   */
  getImageConfig(): Observable<ImageConfig> {
    return this.httpClient.get<ImageConfig>('/assets/config/img-config.json');
  }
}
