import { Component } from '@angular/core';
import { AppConstants } from 'src/app/AppConstants';

@Component({
  selector: 'beyonnex-temperature-config',
  templateUrl: './temperature-config.component.html',
  styleUrls: ['./temperature-config.component.css']
})
export class TemperatureConfigComponent {
  readonly min:number = AppConstants.MINIMUM_TEMPERATURE;
  readonly max:number = AppConstants.MAXIMUM_TEMPERATURE;
  minTemperature: number = 0;
  maxTemperature: number = 100;
  targetTemperature: number = 22;
}
