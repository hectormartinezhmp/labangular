import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paso7 } from './paso7';

describe('Paso7', () => {
  let component: Paso7;
  let fixture: ComponentFixture<Paso7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paso7],
    }).compileComponents();

    fixture = TestBed.createComponent(Paso7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
