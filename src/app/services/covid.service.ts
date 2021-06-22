import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  baseUrl = 'https://coronavirus-smartable.p.rapidapi.com/stats/v1/';
  data = {};

  constructor(private http: HttpClient) { }

  getCovidData(location: String) {
    return this.http.get(this.baseUrl + location + '/', {
      headers: new HttpHeaders({
        'x-rapidapi-key': '131c054857msh632fdd4ad1301a0p19c2e2jsn6532b876c72c',
        'x-rapidapi-host': 'coronavirus-smartable.p.rapidapi.com',
        'useQueryString': 'true'
      })
    });
  }

  getData() {
    return this.data;
  }

  setData(data: any) {
    this.data = data;
  }
}
