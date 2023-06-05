import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarddollarComponent } from './carddollar.component';

describe('CarddollarComponent', () => {
  let component: CarddollarComponent;
  let fixture: ComponentFixture<CarddollarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarddollarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarddollarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
