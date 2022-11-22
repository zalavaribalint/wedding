import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-church-wedding',
  templateUrl: './church-wedding.component.html',
  styleUrls: ['./church-wedding.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChurchWeddingComponent {}
