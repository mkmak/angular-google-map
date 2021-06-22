import { Component, OnInit } from '@angular/core';
import { Marker } from './interfaces/Marker';
import { MouseEvent } from '@agm/core';
import { WeatherService } from './services/weather.service';
import { CovidService } from './services/covid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-google-map';

  lat = 51.678418;
  lng = 7.809007;
  zoom = 2.5;

  marker: Marker = {
    lat: this.lat,
    lng: this.lng,
    draggable: false
  };

  weatherData: any;
  covidData: any;

  constructor(private weatherService: WeatherService, 
    private covidService: CovidService) { }

  ngOnInit() {
    this.setMarkerAndData(this.lat, this.lng);
  }

  setMarkerAndData(lat: number, lng: number) {
    this.weatherService.getWeatherData(lat, lng).subscribe((weatherData: any) => {
      this.weatherService.setData(weatherData);
      this.weatherData = weatherData;
      console.log(this.weatherService.getData());

      this.covidService.getCovidData(weatherData.sys.country).subscribe(covidData => {
        this.covidService.setData(covidData);
        this.covidData = covidData;
        console.log(this.covidService.getData());

        this.marker = {
          lat: lat,
          lng: lng,
          draggable: false
        };
      });
    });
  }

  mapClicked($event: MouseEvent) {
    this.setMarkerAndData($event.coords.lat, $event.coords.lng);
  }
}
