import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-block',
  templateUrl: './simple-block.component.html',
  styleUrls: ['./simple-block.component.scss'],
})
export class SimpleBlockComponent implements OnInit {
  @Input() centerAlign = true;

  constructor() {}

  ngOnInit(): void {}
}
