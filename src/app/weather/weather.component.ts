import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  data: any;
  date: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.data = this.weatherService.getData();
    this.date = new Date(this.data.dt);
  }

  getIconUrl(code: String) {
    return 'https://openweathermap.org/img/wn/' + code + '@2x.png';
  }
}
