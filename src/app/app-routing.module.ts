import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CovidComponent } from './covid/covid.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {path: 'weather', component: WeatherComponent},
  {path: 'covid', component:CovidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
