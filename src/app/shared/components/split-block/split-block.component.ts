import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-split-block',
  templateUrl: './split-block.component.html',
  styleUrls: ['./split-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplitBlockComponent {
  @Input() centerAlign = true;
}
