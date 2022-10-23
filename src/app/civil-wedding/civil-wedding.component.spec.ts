import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilWeddingComponent } from './civil-wedding.component';

describe('CivilWeddingComponent', () => {
  let component: CivilWeddingComponent;
  let fixture: ComponentFixture<CivilWeddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivilWeddingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CivilWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
