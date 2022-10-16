import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchWeddingComponent } from './church-wedding.component';

describe('ChurchWeddingComponent', () => {
  let component: ChurchWeddingComponent;
  let fixture: ComponentFixture<ChurchWeddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChurchWeddingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChurchWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
