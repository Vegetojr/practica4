import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fromulario3Page } from './fromulario3-page';

describe('Fromulario3Page', () => {
  let component: Fromulario3Page;
  let fixture: ComponentFixture<Fromulario3Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fromulario3Page]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fromulario3Page);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
