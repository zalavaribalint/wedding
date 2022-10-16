import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeavyBlockComponent } from './weavy-block.component';

describe('WeavyBlockComponent', () => {
  let component: WeavyBlockComponent;
  let fixture: ComponentFixture<WeavyBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeavyBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeavyBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
