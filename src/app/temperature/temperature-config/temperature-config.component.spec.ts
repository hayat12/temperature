import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureConfigComponent } from './temperature-config.component';

describe('TemperatureConfigComponent', () => {
  let component: TemperatureConfigComponent;
  let fixture: ComponentFixture<TemperatureConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemperatureConfigComponent]
    });
    fixture = TestBed.createComponent(TemperatureConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
