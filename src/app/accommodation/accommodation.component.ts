import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccommodationComponent {}
