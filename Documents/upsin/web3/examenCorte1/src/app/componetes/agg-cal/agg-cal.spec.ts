import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggCal } from './agg-cal';

describe('AggCal', () => {
  let component: AggCal;
  let fixture: ComponentFixture<AggCal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AggCal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggCal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
