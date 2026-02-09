import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cal } from './cal';

describe('Cal', () => {
  let component: Cal;
  let fixture: ComponentFixture<Cal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
