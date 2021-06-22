import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  appid = 'c6699e376e486d3f5e857c122658df97';

  data = {};

  constructor(private http: HttpClient) { }

  getWeatherData(lat: number, lng: number) {
    // api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    return this.http.get(this.baseUrl + '?lat=' + lat + '&lon=' + lng + '&units=imperial' + '&appid=' + this.appid);
  }

  getData() {
    return this.data;
  }

  setData(data: any) {
    this.data = data;
  }
}
