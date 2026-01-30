import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fromulario1Page } from './fromulario1-page';

describe('Fromulario1Page', () => {
  let component: Fromulario1Page;
  let fixture: ComponentFixture<Fromulario1Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fromulario1Page]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fromulario1Page);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
