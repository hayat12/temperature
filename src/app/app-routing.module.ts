import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Page404Component } from './page-404/page-404.component';

const routes: Routes = [
  {
    path: 'app',
    component: AppComponent,
    children: [
      {
        path: 'temperature',
        loadChildren: ()=>import('src/app/temperature/temperature.module').then((m)=>m.TemperatureModule)
      }
    ]
  },
  {
    path: '404-page',
    component: Page404Component
  },
  {
    path: "**",
    redirectTo: 'app/temperature'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
