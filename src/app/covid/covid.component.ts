import { Component, OnInit } from '@angular/core';
import { CovidService } from '../services/covid.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {

  data: any;

  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.data = this.covidService.getData();
  }

}
