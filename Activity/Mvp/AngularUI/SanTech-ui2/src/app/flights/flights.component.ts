import { Component, OnInit, OnChanges} from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, Router } from '@angular/router';
import { FlightService } from '../flight.service';
import { DataService } from '../data-service/data.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'],
  providers: [FlightService]
})
export class FlightsComponent implements OnInit {
  flight_to : any;
  flight_from: any;
  cities = ['CHENNAI', 'DELHI', 'MUMBAI', 'KOLKATA'];
  searchCredentials = { from: '', to: '', date: '' };
  availableFlights: any;
  constructor(private _userService: FlightService,private _DataService: DataService, private route: Router) {
    this.searchCredentials.from = "-1";
    this.searchCredentials.to = "-1";
  }

  ngOnInit() {

  }
  ngOnChanges(searchCredentials){

  }
  flightsearch(searchCredentials){
    console.log(searchCredentials);
    this._userService.flightsearch(searchCredentials).subscribe(
      response => {
        if (response['status'] == 'success') {
          console.log("flight list vantruchu");
          this.availableFlights = response['flights'];
          console.log(this.availableFlights);
          this._DataService.setAvailableFlights(this.availableFlights);
          this._DataService.setTravelDate(this.searchCredentials.date);
        }
      },
      err => {
        console.log("failed");
      }
    )
  }
}
