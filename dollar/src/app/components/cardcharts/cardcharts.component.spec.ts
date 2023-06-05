import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardchartsComponent } from './cardcharts.component';

describe('CardchartsComponent', () => {
  let component: CardchartsComponent;
  let fixture: ComponentFixture<CardchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardchartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
