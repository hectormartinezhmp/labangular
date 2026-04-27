import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paso6 } from './paso6';

describe('Paso6', () => {
  let component: Paso6;
  let fixture: ComponentFixture<Paso6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paso6],
    }).compileComponents();

    fixture = TestBed.createComponent(Paso6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
