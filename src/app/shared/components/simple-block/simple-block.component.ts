import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-block',
  templateUrl: './simple-block.component.html',
  styleUrls: ['./simple-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleBlockComponent {
  @Input() centerAlign = true;
}
