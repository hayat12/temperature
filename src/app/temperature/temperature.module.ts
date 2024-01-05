import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemperatureRoutingModule } from './temperature-routing.module';
import { TemperatureIndicatorComponent } from './temperature-indicator/temperature-indicator.component';
import { TemperatureConfigComponent } from './temperature-config/temperature-config.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TemperatureIndicatorComponent,
    TemperatureConfigComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemperatureRoutingModule
  ]
})
export class TemperatureModule { }
