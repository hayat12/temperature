import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemperatureIndicatorComponent } from './temperature-indicator/temperature-indicator.component';
import { TemperatureConfigComponent } from './temperature-config/temperature-config.component';

const routes: Routes = [
  {
    path: '',
    component: TemperatureConfigComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemperatureRoutingModule { }
