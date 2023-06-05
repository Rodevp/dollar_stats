import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcalculatorComponent } from './cardcalculator.component';

describe('CardcalculatorComponent', () => {
  let component: CardcalculatorComponent;
  let fixture: ComponentFixture<CardcalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardcalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
