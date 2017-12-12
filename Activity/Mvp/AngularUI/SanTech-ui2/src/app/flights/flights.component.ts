import { Component, OnInit} from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  flight_to : any;
  flight_from: any;
  cities = ['CHENNAI', 'DELHI', 'MUMBAI', 'KOLKATA'];
  // console.log(flight_to);
  constructor() {
    this.flight_from = "-1";
  }

  ngOnInit() {
    console.log(this.flight_to);
  }

}
