import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { DataService } from '../data-service/data.service';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent implements OnInit, OnChanges {

  @Input() flights: any;
  constructor(private _DataService: DataService, private route: Router) { }
  ngOnInit() {
    // console.log("flights array", this._DataService.getAvailableFlights());
    // this.flights = this._DataService.getAvailableFlights();
  }
  ngOnChanges() {
    this.flights = this._DataService.getAvailableFlights();
  }
  selectFlight(flight){
    if(sessionStorage.getItem('user_Name') != null){
      this._DataService.setSelectedFlight(flight);
      console.log(this._DataService.getSelectedFlight());
      this.route.navigate(['/booking']);
    }
    else{
      alert("login pannu da..!");
    }

  }
}
