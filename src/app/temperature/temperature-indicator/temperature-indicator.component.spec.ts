import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureIndicatorComponent } from './temperature-indicator.component';

describe('TemperatureIndicatorComponent', () => {
  let component: TemperatureIndicatorComponent;
  let fixture: ComponentFixture<TemperatureIndicatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemperatureIndicatorComponent]
    });
    fixture = TestBed.createComponent(TemperatureIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
