import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fromulario2Page } from './fromulario2-page';

describe('Fromulario2Page', () => {
  let component: Fromulario2Page;
  let fixture: ComponentFixture<Fromulario2Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fromulario2Page]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fromulario2Page);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
