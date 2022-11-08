import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-split-block',
  templateUrl: './split-block.component.html',
  styleUrls: ['./split-block.component.scss'],
})
export class SplitBlockComponent implements OnInit {
  @Input() centerAlign = true;

  constructor() {}

  ngOnInit(): void {}
}
