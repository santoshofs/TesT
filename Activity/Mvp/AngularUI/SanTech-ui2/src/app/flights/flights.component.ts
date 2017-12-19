import { Component, OnInit} from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, Router } from '@angular/router';
import { FlightService } from '../flight.service';
import { DataService } from '../data-service/data.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'],
  providers: [FlightService,DataService]
})
export class FlightsComponent implements OnInit {
  flight_to : any;
  flight_from: any;
  cities = ['CHENNAI', 'DELHI', 'MUMBAI', 'KOLKATA'];
  searchCredentials = { from: '', to: '', date: '' };
  availableFlights: any;
  // console.log(flight_to);
  constructor(private _userService: FlightService,private _DataService: DataService, private route: Router) {
    this.searchCredentials.from = "-1";
    this.searchCredentials.to = "-1";
  }

  ngOnInit() {

  }
  flightsearch(searchCredentials){
    console.log(searchCredentials);
    this._userService.flightsearch(searchCredentials).subscribe(
      response => {
        if (response['status'] == 'success') {
          console.log("flight list vantruchu");
          this.availableFlights = response['flights'];
          console.log(this.availableFlights);
          this._DataService.availableFlights(this.availableFlights);
          console.log("fromset"+this._DataService.availableFlights);
        }
      },
      err => {
        console.log("failed");
      }
    )
  }
}
