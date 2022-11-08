import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleBlockComponent } from './simple-block.component';

describe('SimpleBlockComponent', () => {
  let component: SimpleBlockComponent;
  let fixture: ComponentFixture<SimpleBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleBlockComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
