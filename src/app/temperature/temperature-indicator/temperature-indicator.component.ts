import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { AppConstants } from 'src/app/AppConstants';

@Component({
  selector: 'beyonnex-temperature-indicator',
  templateUrl: './temperature-indicator.component.html',
  styleUrls: ['./temperature-indicator.component.css'],
  animations: [
    trigger('indicatorMove', [
      transition('* => *', [
        style({ transform: 'translateX({{ previousPosition }}%)' }),
        animate('500ms', style({ transform: 'translateX({{ currentPosition }}%)' })),
      ]),
    ]),
  ],
})
export class TemperatureIndicatorComponent {

  @Input() minTemperature: number = AppConstants.MINIMUM_TEMPERATURE;
  @Input() maxTemperature: number = AppConstants.MAXIMUM_TEMPERATURE;
  @Input() currentTemperature: number = AppConstants.DEFAULT_TEMPERATURE;

  calculateRotation(): number {
    const totalRange = this.maxTemperature - this.minTemperature;
    const position = this.currentTemperature - this.minTemperature;
    return (position / totalRange) * 180 - 90;
  }

}
