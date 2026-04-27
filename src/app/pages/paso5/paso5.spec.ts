import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paso5 } from './paso5';

describe('Paso5', () => {
  let component: Paso5;
  let fixture: ComponentFixture<Paso5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paso5],
    }).compileComponents();

    fixture = TestBed.createComponent(Paso5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
