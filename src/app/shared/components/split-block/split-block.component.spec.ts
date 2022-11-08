import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitBlockComponent } from './split-block.component';

describe('SplitBlockComponent', () => {
  let component: SplitBlockComponent;
  let fixture: ComponentFixture<SplitBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
